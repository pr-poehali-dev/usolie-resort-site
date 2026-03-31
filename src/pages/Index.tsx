import { useState } from "react";
import Header from "@/components/cadet/Header";
import HeroAbout from "@/components/cadet/HeroAbout";
import AdmissionEducation from "@/components/cadet/AdmissionEducation";
import UpbringingGalleryContacts from "@/components/cadet/UpbringingGalleryContacts";

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", child: "", email: "" });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cadet-dark font-body text-cadet-light">
      <Header scrollTo={scrollTo} />
      <HeroAbout scrollTo={scrollTo} />
      <AdmissionEducation form={form} setForm={setForm} />
      <UpbringingGalleryContacts scrollTo={scrollTo} />
    </div>
  );
}
