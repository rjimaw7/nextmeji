import UserPage from '@/components/UserPage/UserPage';

const SpecificUserDetails = async ({ params }: { params: { id: string } }) => {
  return <UserPage id={params.id} />;
};

export default SpecificUserDetails;
