import { openPositions } from "../data";
import JobDetailsClient from "./JobDetailsClient";

export async function generateStaticParams() {
  return openPositions.map((job) => ({
    id: job.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <JobDetailsClient id={id} />;
}