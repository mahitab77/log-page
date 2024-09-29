
import { Sidebar } from '@/components/ui/sidebar'; 
import { Button } from '../components/ui/button'; 
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; 
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'; 
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'; 

const LogsPage = () => {
  const menuItems = ['Home', 'Logging', 'Trainers and Users', 'Settings'];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Main content */}
      <div className="w-4/5 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card for Welcome Message and Add Logging Button */}
          <Card>
            <CardHeader>
              <CardTitle>Welcome Mahi,</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="mt-2">Start Logging +</Button>
            </CardContent>
          </Card>

          {/* Card for Avatar */}
          <Card className="flex justify-center items-center">
            <Avatar>
              <AvatarImage src="https://via.placeholder.com/50" alt="Mahi's Avatar" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
          </Card>
        </div>

        {/* Card for Tabs Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Logs Overview</CardTitle>
          </CardHeader>
          <CardContent>
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

              {/* Other Tabs Content */}
              <TabsContent value="weight">
                <h3 className="text-lg font-semibold mb-4">Weight Log</h3>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                  <p>Log your weight regularly to track progress.</p>
                </div>
              </TabsContent>
              <TabsContent value="sleep">
                <h3 className="text-lg font-semibold mb-4">Sleep Log</h3>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                  <p>Track your sleeping habits to improve your rest and recovery.</p>
                </div>
              </TabsContent>
              <TabsContent value="calories">
                <h3 className="text-lg font-semibold mb-4">Calories Log</h3>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                  <p>Monitor your calorie intake to stay on track with your dietary goals.</p>
                </div>
              </TabsContent>
              <TabsContent value="water">
                <h3 className="text-lg font-semibold mb-4">Water Log</h3>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                  <p>Keep track of your water intake to ensure you are staying hydrated.</p>
                </div>
              </TabsContent>
              <TabsContent value="steps">
                <h3 className="text-lg font-semibold mb-4">Steps Log</h3>
                <div className="p-4 bg-gray-100 rounded-md shadow">
                  <p>Track your daily steps to measure your activity level.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogsPage;
