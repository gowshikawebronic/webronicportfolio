import { openPositions } from "../data";
import JobDetailsClient from "./JobDetailsClient";

// 1. Static Params for build time
export async function generateStaticParams() {
  return openPositions.map((job) => ({
    id: job.id,
  }));
}

// 2. Server Page component
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Return the client component and pass the ID
  return <JobDetailsClient id={id} />;
}