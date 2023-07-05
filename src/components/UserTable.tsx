import * as React from 'react';

interface Props { users: any; }

export class UserTable extends React.Component<Props, any> {
  constructor(props: Props) {
      super(props);
  }

  const userCount = this.props.users.length;
  render() {
      return <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          {userCount}
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Phone</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Email</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="text-sm text-black dark:text-white">John Doe</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">+91 7840089263</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="text-sm text-black dark:text-white">johndoe@gmail.com</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="text-sm text-black dark:text-white">Mia Wong</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">+91 7840089263</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="text-sm text-black dark:text-white">miawong@gmail.com</p>
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="text-sm text-black dark:text-white">Jiong Fei</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">+91 7840089263</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="text-sm text-black dark:text-white">jiangfei@gmail.com</p>
        </div>
      </div>
    </div>
  }
}
