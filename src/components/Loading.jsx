export const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="flex justify-center py-5">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};
