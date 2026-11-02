import { db, isFirebaseConfigured } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface InquiryData {
  orgName: string;
  eventName: string;
  name: string;
  phone: string;
  email: string;
  scale: string;
  serviceType: string;
  message?: string;
  source?: string;
}

export interface InquiryResult {
  success: boolean;
  id?: string;
  isSimulated?: boolean;
  error?: string;
}

export async function submitInquiry(data: InquiryData): Promise<InquiryResult> {
  // If Firebase is configured with real credentials, save to Firestore 'inquiries' collection
  if (isFirebaseConfigured() && db) {
    try {
      const docRef = await addDoc(collection(db, "inquiries"), {
        ...data,
        status: "pending",
        createdAt: serverTimestamp(),
        clientTimestamp: new Date().toISOString(),
      });
      return { success: true, id: docRef.id, isSimulated: false };
    } catch (err: unknown) {
      console.error("Firestore save error:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to save to Firebase";
      return { success: false, error: errorMessage };
    }
  }

  // Graceful fallback for local development / testing before Firebase keys are added
  console.info("Firebase credentials not detected in environment. Storing inquiry in local session for demo.");
  try {
    if (typeof window !== "undefined") {
      const existing = JSON.parse(localStorage.getItem("gentrophy_local_inquiries") || "[]");
      const simulatedDoc = {
        ...data,
        id: "local_" + Date.now(),
        status: "pending",
        createdAt: new Date().toISOString(),
      };
      existing.push(simulatedDoc);
      localStorage.setItem("gentrophy_local_inquiries", JSON.stringify(existing));
      return { success: true, id: simulatedDoc.id, isSimulated: true };
    }
  } catch {
    // ignore
  }

  return { success: true, isSimulated: true };
}
