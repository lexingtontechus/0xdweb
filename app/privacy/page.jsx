"use client"
export default function Privacy() {
  return (
    <div className="max-w-5xl text-pretty p-8">
      <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
        Privacy Policy
      </h1>
      <h2 className="text-2xl font-semibold text-primary">
        Last updated Jan 01, {new Date().getFullYear()}
      </h2>
      <p className="py-6 font-semibold text-lg">
        This policy outlines how 0xDWEB stores and uses user data that is
        collected in the course of them visiting your website in accordance with
        General Data Protection Regulation (GDPR) and California Consumer
        Privacy Act (CCPA).
      </p>
      <p className="py-6 text-lg text-accent-content">
        0xDWEB does not collect, use, disclose or process your personal
        information in connection with our services.
      </p>
    </div>
  )
}
