import React from 'react';
import './DsAndAlgorithms-page.scss';
import PageLayout from '../../components/Layout/PageLayout';
import { DataStructures } from './components';
import { binarySearch, mergeAndSort, quickSort, quickSortObj } from './algorithms';
import { arrWithOrders } from './data-for-test-algo';

const DsAndAlgorithmsPage: React.FC = () => {
  {
    const ordered = quickSortObj(arrWithOrders);
    console.log('ordered: ', ordered);
  }
  return (
    <PageLayout pageHeading="page-DsAndAlgorithms">
      <main className="page-DsAndAlgorithms">
        <DataStructures />
      </main>
    </PageLayout>
  );
};
export default DsAndAlgorithmsPage;
