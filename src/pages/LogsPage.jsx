
import { Sidebar } from '../components/ui/sidebar'; // Ensure correct path for Sidebar
import { Button } from '../components/ui/button'; // Ensure correct path for Button
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'; // Use the updated Avatar components
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'; // Ensure correct path for Tabs

const LogsPage = () => {
  const menuItems = ['Home', 'Logging', 'Trainers and Users', 'Settings'];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Main content */}
      <div className="w-4/5 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Welcome Mahi,</h1>
            <Button>Start Logging +</Button>
          </div>
          
          {/* Avatar with image and fallback */}
          <Avatar>
            <AvatarImage src="https://via.placeholder.com/50" alt="Mahi's Avatar" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </div>

        <h2 className="text-xl mb-4">Logs Overview</h2>

        {/* Tabs Component */}
        <Tabs defaultValue="workout">
          <TabsList>
            <TabsTrigger value="workout">Workout Log</TabsTrigger>
            <TabsTrigger value="weight">Weight Log</TabsTrigger>
            <TabsTrigger value="sleep">Sleep Log</TabsTrigger>
            <TabsTrigger value="calories">Calories Log</TabsTrigger>
            <TabsTrigger value="water">Water Log</TabsTrigger>
            <TabsTrigger value="steps">Steps Log</TabsTrigger>
          </TabsList>

          {/* Workout Log Content */}
          <TabsContent value="workout">
            <h3 className="text-lg font-semibold mb-4">Available Workouts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded-md shadow">
                <h4 className="text-md font-semibold">Workout 1</h4>
                <p>Cardio and Strength</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow">
                <h4 className="text-md font-semibold">Workout 2</h4>
                <p>HIIT Session</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow">
                <h4 className="text-md font-semibold">Workout 3</h4>
                <p>Strength Training</p>
              </div>
            </div>
          </TabsContent>

          {/* Other Tabs Content */}
          {/* Implement the other tabs content here (Weight, Sleep, Calories, etc.) */}
        </Tabs>
      </div>
    </div>
  );
};

export default LogsPage;
