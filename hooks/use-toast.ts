// Simple toast replacement using JavaScript alerts
export function useToast() {
  const toast = (options: {
    title?: string;
    description?: string;
    variant?: string;
  }) => {
    const message = options.title || options.description || "Notification";
    alert(message);
  };

  return { toast };
}

export { useToast as default };
