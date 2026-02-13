import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";

export function useCreateLead() {
  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to create lead");
      }

      return res.json();
    },
  });
}
