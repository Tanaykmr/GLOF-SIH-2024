import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Bell, Globe, HelpCircle, Search, Settings} from "lucide-react";

export default function Dashboard() {
	return (
		<div className="min-h-screen bg-gray-900 text-white">
			<header className="border-b border-gray-800 p-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<Globe className="h-8 w-8" />
						<h1 className="text-xl font-bold">GLOFAlert</h1>
					</div>
					<div className="flex items-center space-x-4">
						{/* <Input className="w-64 bg-gray-800 text-white placeholder-gray-400" placeholder="Enter search term" /> */}
						<div className="relative w-64">
							{/* Search Icon */}
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Search className="text-gray-400" />
							</div>

							{/* Input Field */}
							<Input
								className="pl-10 w-full bg-gray-800 text-white placeholder-gray-400"
								placeholder="Enter search term"
							/>
						</div>

						<Button variant="ghost" size="icon">
							<HelpCircle className="h-5 w-5" />
						</Button>
						<Button variant="ghost" size="icon">
							<Settings className="h-5 w-5" />
						</Button>
						<Button variant="ghost" size="icon">
							<Bell className="h-5 w-5" />
						</Button>
						<Avatar>
							<AvatarImage src="/placeholder-user.jpg" />
							<AvatarFallback>US</AvatarFallback>
						</Avatar>
					</div>
				</div>
				<nav className="mt-4">
					<ul className="flex space-x-4">
						{["Dashboard", "Contacts", "News", "Employee resources", "Applications", "Documents"].map((item) => (
							<li key={item}>
								<Link className="text-gray-300 hover:text-white" href="#">
									{item}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<main className="p-6">
				<div className="mb-6">
					<h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<Card className="bg-gray-800">
							<CardContent className="p-4">
								<h3 className="text-lg font-semibold mb-2">GLOF Prevention Summit</h3>
								<p className="text-sm text-gray-400">Alert Registration</p>
							</CardContent>
						</Card>
						<Card className="bg-gray-800">
							<CardContent className="p-4">
								<h3 className="text-lg font-semibold mb-2">Emergency Pet Evacuation Plan</h3>
							</CardContent>
						</Card>
						<Card className="bg-gray-800">
							<CardContent className="p-4">
								<h3 className="text-lg font-semibold mb-2">Emergency Preparedness Kits</h3>
							</CardContent>
						</Card>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card className="bg-gray-800">
						<CardContent>
							<h3 className="text-lg font-semibold mb-4">Events</h3>
							<Calendar className="rounded-md border" />
						</CardContent>
					</Card>
					<Card className="bg-gray-800">
						<CardContent>
							<h3 className="text-lg font-semibold mb-4">Applications</h3>
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
								{["My Profile", "Safety Tips", "warning", "monitor", "statistics", "alert", "info"].map((app) => (
									<Button key={app} variant="secondary" className="w-full">
										{app}
									</Button>
								))}
								<Button variant="secondary" className="w-full bg-purple-600 text-white">
									Info
								</Button>
							</div>
						</CardContent>
					</Card>
					<Card className="bg-gray-800">
						<CardContent>
							<h3 className="text-lg font-semibold mb-4">alert system</h3>
							<ul className="space-y-2">
								{[
									"Alert System Statistics available",
									"Monitor Glacier Depth readings",
									"Pressure data Flow analysis",
									"Operations Emergency",
								].map((item, index) => (
									<li key={index} className="flex items-center space-x-2">
										<Avatar className="h-8 w-8">
											<AvatarImage src={`/placeholder-${index + 1}.jpg`} />
											<AvatarFallback>AS</AvatarFallback>
										</Avatar>
										<span className="text-sm">{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
