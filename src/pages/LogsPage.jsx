
import { Sidebar } from '@/components/ui/Sidebar';
import { Button } from '../components/ui/button'; 
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar'; 
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

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

          {/* Tab 1: Workout Log */}
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

          {/* Tab 2: Weight Log */}
          <TabsContent value="weight">
            <h3 className="text-lg font-semibold mb-4">Weight Log</h3>
            <div className="p-4 bg-gray-100 rounded-md shadow">
              <p>Log your weight regularly to track progress.</p>
            </div>
          </TabsContent>

          {/* Tab 3: Sleep Log */}
          <TabsContent value="sleep">
            <h3 className="text-lg font-semibold mb-4">Sleep Log</h3>
            <div className="p-4 bg-gray-100 rounded-md shadow">
              <p>Track your sleeping habits to improve your rest and recovery.</p>
            </div>
          </TabsContent>

          {/* Tab 4: Calories Log */}
          <TabsContent value="calories">
            <h3 className="text-lg font-semibold mb-4">Calories Log</h3>
            <div className="p-4 bg-gray-100 rounded-md shadow">
              <p>Monitor your calorie intake to stay on track with your dietary goals.</p>
            </div>
          </TabsContent>

          {/* Tab 5: Water Log */}
          <TabsContent value="water">
            <h3 className="text-lg font-semibold mb-4">Water Log</h3>
            <div className="p-4 bg-gray-100 rounded-md shadow">
              <p>Keep track of your water intake to ensure you are staying hydrated.</p>
            </div>
          </TabsContent>

          {/* Tab 6: Steps Log */}
          <TabsContent value="steps">
            <h3 className="text-lg font-semibold mb-4">Steps Log</h3>
            <div className="p-4 bg-gray-100 rounded-md shadow">
              <p>Track your daily steps to measure your activity level.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LogsPage;
