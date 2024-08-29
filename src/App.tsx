import Button from './components/Button';

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold mb-8">Button Types</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex flex-col items-center">
          <Button>Default</Button>
          <span className="mt-2 text-sm text-gray-500">Default</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="purple">Purple</Button>
          <span className="mt-2 text-sm text-gray-500">Purple</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="blue">Blue</Button>
          <span className="mt-2 text-sm text-gray-500">Blue</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="failure">Failure</Button>
          <span className="mt-2 text-sm text-gray-500">Failure</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="warning">Warning</Button>
          <span className="mt-2 text-sm text-gray-500">Warning</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="success">Success</Button>
          <span className="mt-2 text-sm text-gray-500">Success</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="light">Light</Button>
          <span className="mt-2 text-sm text-gray-500">Light</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="gray">Gray</Button>
          <span className="mt-2 text-sm text-gray-500">Gray</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="dark">Dark</Button>
          <span className="mt-2 text-sm text-gray-500">Dark</span>
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex flex-col items-center">
          <Button outline>Purple to Blue</Button>
          <span className="mt-2 text-sm text-gray-500">Outline (Default)</span>
        </div>
        <div className="flex flex-col items-center">
          <Button outline color="default">Cyan to Blue</Button>
          <span className="mt-2 text-sm text-gray-500">Outline (Default Color)</span>
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex flex-col items-center">
          <Button size="xs">Extra small</Button>
          <span className="mt-2 text-sm text-gray-500">Extra small</span>
        </div>
        <div className="flex flex-col items-center">
          <Button size="sm">Small</Button>
          <span className="mt-2 text-sm text-gray-500">Small</span>
        </div>
        <div className="flex flex-col items-center">
          <Button size="md">Base</Button>
          <span className="mt-2 text-sm text-gray-500">Base</span>
        </div>
        <div className="flex flex-col items-center">
          <Button size="lg">Large</Button>
          <span className="mt-2 text-sm text-gray-500">Large</span>
        </div>
        <div className="flex flex-col items-center">
          <Button size="xl">Extra large</Button>
          <span className="mt-2 text-sm text-gray-500">Extra large</span>
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex flex-col items-center">
          <Button pill>Default</Button>
          <span className="mt-2 text-sm text-gray-500">Pill (Default)</span>
        </div>
        <div className="flex flex-col items-center">
          <Button color="blue" pill>Blue</Button>
          <span className="mt-2 text-sm text-gray-500">Pill (Blue)</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col items-center">
          <Button disabled={true}>Disabled button</Button>
          <span className="mt-2 text-sm text-gray-500">Disabled</span>
        </div>
      </div>
    </div>
  );
}

export default App;
