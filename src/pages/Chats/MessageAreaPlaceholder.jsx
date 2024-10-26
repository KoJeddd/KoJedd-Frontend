const MessageAreaPlaceholder = () => {
  return (
    <div className="hidden h-full relative lg:grid place-items-center border-l border-neutral-700 text-center">
      <div className="max-w-96">
        <div className="mx-auto mb-6 h-28 w-28 rounded-xl bg-neutral-700"></div>
        <h1 className="mb-2 text-2xl font-bold">DeCollaborator Chat</h1>
        <p className="text-sm leading-6 text-neutral-400">
          Welcome to our DeCollaborator Chat, a digital playground for you to
          connect, engage, and collaborate like never before
        </p>
      </div>
      <div className="absolute bottom-6 text-sm">End to end encrypted</div>
    </div>
  );
};

export default MessageAreaPlaceholder;
