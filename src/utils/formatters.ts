export const formatPrice = (price: number): string => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}K`;
  }
  return `$${price.toLocaleString()}`;
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString("en-US");
};

export const formatSquareFeet = (sqFt: number): string => {
  if (sqFt >= 1000) {
    return `${(sqFt / 1000).toFixed(0)}K`;
  }
  return sqFt.toLocaleString();
};

export const calculateMortgage = (
  propertyValue: number,
  downPaymentPercent: number,
  loanTermYears: number,
  interestRate: number = 4.5
): {
  downPayment: number;
  loanAmount: number;
  monthlyPayment: number;
} => {
  const downPayment = propertyValue * (downPaymentPercent / 100);
  const loanAmount = propertyValue - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return {
    downPayment,
    loanAmount,
    monthlyPayment,
  };
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.startsWith("971")) {
    return `+971 ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(
      8
    )}`;
  }

  return phone;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const downloadFile = (url: string, filename: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const shareVia = (
  method: "email" | "whatsapp",
  data: {
    title: string;
    url: string;
    message?: string;
  }
) => {
  const { title, url, message } = data;

  switch (method) {
    case "email": {
      const emailSubject = encodeURIComponent(title);
      const emailBody = encodeURIComponent(`${message || ""}\n\n${url}`);
      window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
      break;
    }

    case "whatsapp": {
      const whatsappText = encodeURIComponent(
        `${title}\n${message || ""}\n${url}`
      );
      window.open(`https://wa.me/?text=${whatsappText}`, "_blank");
      break;
    }
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s+\-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
};
