import { getCustomerList } from '@/app/lib/data';
import CustomerCard from '@/app/ui/customers/customerCard';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';


interface searchParamsProps {
  searchParams?: {
    query?: string,
    page?: string
  }
}

export default async function Page({searchParams,}: searchParamsProps) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const customerList = await getCustomerList();

  // console.log('fetchCustomers ====', fetchCustomers());

  return (
    <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
      <CustomerCard />
    </Suspense>
  );
};