import React from 'react';
// import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '../../Shared/Layout';
import Icon from '../../Shared/Icon';
import Pagination from '../../Shared/Pagination';
import SearchFilter from '../../Shared/SearchFilter';

const Index = () => {
  // const { contacts } = usePage().props;
  // const {
  //   data,
  //   meta: { links }
  // } = contacts;
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Contacts</h1>
      <div className="flex items-center justify-between mb-6">
        <SearchFilter />
        {/* <InertiaLink
          className="btn-indigo focus:outline-none"
          href={route('contacts.create')}
        >
          <span>Create</span>
          <span className="hidden md:inline"> Contact</span>
        </InertiaLink> */}
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="font-bold text-left">
              <th className="px-6 pt-5 pb-4">Name</th>
              <th className="px-6 pt-5 pb-4">Organization</th>
              <th className="px-6 pt-5 pb-4">City</th>
              <th className="px-6 pt-5 pb-4" colSpan="2">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map(({ id, name, city, phone, organization, deleted_at }) => ( */}
              <tr
                key={1}
                className="hover:bg-gray-100 focus-within:bg-gray-100"
              >
                <td className="border-t">
                  {/* <InertiaLink
                    href={route('contacts.edit', id)}
                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                  >
                    {name}
                    {deleted_at && (
                      <Icon
                        name="trash"
                        className="flex-shrink-0 w-3 h-3 ml-2 text-gray-400 fill-current"
                      />
                    )}
                  </InertiaLink>
                </td>
                <td className="border-t">
                  <InertiaLink
                    tabIndex="1"
                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                    href={route('contacts.edit', id)}
                  >
                    {organization ? organization.name : ''}
                  </InertiaLink>
                </td>
                <td className="border-t">
                  <InertiaLink
                    tabIndex="-1"
                    href={route('contacts.edit', id)}
                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                  >
                    {city}
                  </InertiaLink>
                </td>
                <td className="border-t">
                  <InertiaLink
                    tabIndex="-1"
                    href={route('contacts.edit', id)}
                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                  >
                    {phone}
                  </InertiaLink>
                </td>
                <td className="w-px border-t">
                  <InertiaLink
                    tabIndex="-1"
                    href={route('contacts.edit', id)}
                    className="flex items-center px-4 focus:outline-none"
                  >
                    <Icon
                      name="cheveron-right"
                      className="block w-6 h-6 text-gray-400 fill-current"
                    />
                  </InertiaLink> */}
                </td>
              </tr>
             {/* ))} */}
            {/* {data.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  No contacts found.
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
      {/* <Pagination links={links} /> */}
    </div>
  );
};

Index.layout = page => <Layout title="Contacts" children={page} />;

export default Index;
