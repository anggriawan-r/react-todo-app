export default function MaxWIdthWrapper({ className, children }) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-md px-4 md:px-20 ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
}
