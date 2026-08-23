import { SectionContainer } from "@/components/shared";

export default function Loading() {
  return (
    <SectionContainer className="flex min-h-[50vh] items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    </SectionContainer>
  );
}
