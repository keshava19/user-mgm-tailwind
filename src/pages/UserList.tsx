import Breadcrumb from '../components/Breadcrumb';
import { UserTable } from '../components/UserTable';
import { UserCard } from '../components/UserCard';
import React, {useState} from 'react';

const UserList: React.FC = () => {

  const [value, setValue] = useState(0);
  return (
    <>
      <Breadcrumb pageName="UserList" />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <UserTable title="UserList"></UserTable>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <UserCard num={value}></UserCard>
        </div>
      </div>

      {/* <div className="flex flex-col gap-10">
        <UserTable />
      </div> */}
    </>
  );
};

export default UserList;
