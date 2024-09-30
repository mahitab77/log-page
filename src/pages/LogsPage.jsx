import { useState } from "react";
import { Sidebar } from "../components/ui/Sidebar"; // Sidebar component
import { Button } from "../components/ui/button"; // Button component from ShadCN
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/Avatar"; // Avatar component from ShadCN
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs"; // Tabs component from ShadCN
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"; // Card component from ShadCN
import { BasicInput } from "../components/ui/input/basicinput"; // Basic Input component
import { Textarea } from "../components/ui/input/textarea"; // Textarea component
import { Checkbox } from "../components/ui/input/checkbox"; // Checkbox component
import { RadioGroup, Radio } from "../components/ui/input/radio-group"; // Radio Group and Radio components
import { Select, SelectItem } from "../components/ui/input/select"; // Select dropdown component
import { DateInput } from "../components/ui/input/date-input"; // Date Input component
import { TimeInput } from "../components/ui/input/time-input"; // Time Input component
import { FileUpload } from "../components/ui/input/file-upload"; // File Upload component
import emailjs from "emailjs-com"; // Email.js for sending form data

// LogsPage Component
const LogsPage = () => {
  // State for handling form data
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    description: '',
    date: '',
    time: '',
    file: null,
    select: '',
    checkbox: false,
    radio: '',
  });

  // Handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data to the console

    // Send data using Email.js
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your Email.js service ID
      'YOUR_TEMPLATE_ID', // Replace with your Email.js template ID
      e.target,
      'YOUR_USER_ID' // Replace with your Email.js user ID
    ).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  const menuItems = ['Home', 'Logging', 'Trainers and Users', 'Settings'];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} /> {/* Sidebar with menu items */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card for Welcome Message and Add Logging Button */}
          <Card>
            <CardHeader>
              <CardTitle>Welcome Mahi,</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="mt-2">Start Logging +</Button> {/* Logging Button */}
            </CardContent>
          </Card>

          {/* Card for Avatar */}
          <Card className="flex justify-center items-center">
            <Avatar>
              <AvatarImage src="https://via.placeholder.com/50" alt="Mahi's Avatar" />
              <AvatarFallback>M</AvatarFallback> {/* Fallback when no image is provided */}
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
              {/* Tab content */}
              <TabsContent value="workout">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card><CardTitle>Workout 1</CardTitle></Card>
                  <Card><CardTitle>Workout 2</CardTitle></Card>
                  <Card><CardTitle>Workout 3</CardTitle></Card>
                </div>
              </TabsContent>
              <TabsContent value="weight">Weight log content goes here...</TabsContent>
              <TabsContent value="sleep">Sleep log content goes here...</TabsContent>
              <TabsContent value="calories">Calories log content goes here...</TabsContent>
              <TabsContent value="water">Water log content goes here...</TabsContent>
              <TabsContent value="steps">Steps log content goes here...</TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Card with Input Form */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Input Form</CardTitle>
          </CardHeader>
          <CardContent className="h-96 overflow-y-auto">
            {/* Form for various inputs */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Text Input */}
              <BasicInput
                type="text"
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="Enter text"
              />

              {/* Email Input */}
              <BasicInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />

              {/* Password Input */}
              <BasicInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
              />

              {/* Textarea */}
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter description"
              />

              {/* Date Picker */}
              <DateInput
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />

              {/* Time Picker */}
              <TimeInput
                name="time"
                value={formData.time}
                onChange={handleInputChange}
              />

              {/* File Upload */}
              <FileUpload
                name="file"
                onChange={handleInputChange}
              />

              {/* Dropdown (Select) */}
              <Select
                name="select"
                value={formData.select}
                onChange={(e) => setFormData({ ...formData, select: e.target.value })}
              >
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </Select>

              {/* Checkbox */}
              <Checkbox
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleInputChange}
                label="I agree to the terms"
              />

              {/* Radio Group */}
              <RadioGroup
                name="radio" // Pass a name prop to the RadioGroup to ensure all radios are grouped
                value={formData.radio} // Track the selected value
                onChange={(e) => setFormData({ ...formData, radio: e.target.value })} // Handle change
              >
                <Radio
                  name="radio" // Pass the name prop here
                  label="Option 1"
                  value="option1"
                  checked={formData.radio === "option1"} // Check if selected
                  onChange={(e) => setFormData({ ...formData, radio: e.target.value })} // Update the state
                />
                <Radio
                  name="radio" // Pass the name prop here
                  label="Option 2"
                  value="option2"
                  checked={formData.radio === "option2"} // Check if selected
                  onChange={(e) => setFormData({ ...formData, radio: e.target.value })} // Update the state
                />
                <Radio
                  name="radio" // Pass the name prop here
                  label="Option 3"
                  value="option3"
                  checked={formData.radio === "option3"} // Check if selected
                  onChange={(e) => setFormData({ ...formData, radio: e.target.value })} // Update the state
                />
              </RadioGroup>



              {/* Submit Button */}
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogsPage;
