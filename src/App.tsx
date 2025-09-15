import * as Dialog from "@radix-ui/react-dialog";

export default function App() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded">
        Open Modal
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded shadow-lg -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-lg font-bold">Hello!</Dialog.Title>
          <Dialog.Description className="mt-2">
            This is a Radix UI modal.
          </Dialog.Description>
          <Dialog.Close className="mt-4 px-3 py-1 bg-gray-200 rounded">Close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
