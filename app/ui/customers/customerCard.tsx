import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {CustomerFieldAll,} from '@/app/lib/definitions';
import { getCustomerList } from '@/app/lib/data';

export default async function CustomerCard() {

  const customers = await getCustomerList();

  return (
    <div className="flex flex-wrap">
      {customers?.map((customer) => (
        <div
          key={customer.id}
          className="mb-2 rounded-md bg-white p-4"
        >
          <div className="flex items-center gap-3 flex-col">
            <Image
              src={customer.image_url}
              className="rounded-full"
              alt={`${customer.name}'s profile picture`}
              width={100}
              height={100}
            />
            <p>{customer.name}</p>
            <p className="text-sm text-gray-500">
              {customer.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
