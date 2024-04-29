const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className={`px-2 py-5 sm:px-[5vw]`}>{children}</section>;
};

export default Container;
