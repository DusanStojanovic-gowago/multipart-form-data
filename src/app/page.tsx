"use client";

import { FormEventHandler } from "react";

export default function Home() {
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/upload-file", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <main>
      <form
        className="flex flex-col gap-4 max-w-[400px] p-4"
        onSubmit={onSubmit}
      >
        <div className="border inline-block">
          <input type="file" name="image" />
        </div>
        <button className="border p-4 bg-emerald-500">Upload</button>
      </form>
    </main>
  );
}
