import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit',
};

interface paramsProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: paramsProps) {
  console.log('dashboard/invoices/[id]/edit/page - params ===', params);
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs breadcrumbs={[
        {
          label: 'Invoices',
          href: '/dashboard/invoices',
        },
        {
          label: 'Edit Invoice',
          href: `/dashboard/invoices/${id}/edit`,
          active: true,
        }
      ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  )
}