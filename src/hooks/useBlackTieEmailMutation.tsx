// src/hooks/useBlackTieEmailMutation.ts
import { useState } from "react";

export interface ContactFormData {
	name: string;
	phone: string;
	email: string;
	message: string;
}

export interface EmailResponse {
	success: boolean;
	message: string;
	messageId?: string;
}

export const useBlackTieEmailMutation = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<EmailResponse | null>(null);

	const sendEmail = async (
		formData: ContactFormData
	): Promise<EmailResponse> => {
		setIsLoading(true);
		setError(null);

		try {
			console.log("🚀 Sending Black Tie Events inquiry:", formData);

			// Call the Next.js App Router API route
			const response = await fetch("/api/send-black-tie-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Failed to send email");
			}

			console.log("✅ Email sent successfully:", result);

			setData(result);
			setIsLoading(false);

			return result;
		} catch (err: unknown) {
			console.error("❌ Email error:", err);

			const errorMessage =
				err instanceof Error
					? err.message
					: "Failed to send email. Please try calling us directly.";
			setError(errorMessage);
			setIsLoading(false);

			throw new Error(errorMessage);
		}
	};

	const reset = () => {
		setError(null);
		setData(null);
		setIsLoading(false);
	};

	return {
		sendEmail,
		isLoading,
		error,
		data,
		reset,
		isError: !!error,
	};
};
