import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/5bb49d4a-3504-47b5-962f-66f468b5c7c2-1w4ot.jpeg",
  "https://utfs.io/f/feb0dc03-974b-4c61-8074-86cf0ce72a4e-1qelug.jpeg",
  "https://utfs.io/f/57155a9e-57aa-43c9-a9e1-4aade10e7e25-1n3y36.jpeg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))
    }</div>
      Hello (Gallery in Progress)
    </main>
  );
}
