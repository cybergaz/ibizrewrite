'use client'

import ProductList from '@/components/other/product-list'
import ProductCategory from '@/components/other/product_category'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

// Temporary data for categories
const categories = [
    {
        category: "Abrasives Wheels & Drill",
        items: [
            { title: "Abrasives Wheels", link: "/products/abrasives-wheels" },
            { title: "Drill", link: "/products/abrasives-wheels" },
            { title: "Grinding Wheel", link: "/products/abrasives-wheels" },
            { title: "Sanding Disc", link: "/products/abrasives-wheels" },
            { title: "Sanding Paper", link: "/products/abrasives-wheels" },
            { title: "Sanding Wheel", link: "/products/abrasives-wheels" },
        ]
    },
    {
        category: "Air Tool",
        items: [
            { title: "Air Compressor", link: "/products/air-tool" },
            { title: "Impact Wrench", link: "/products/air-tool" },
            { title: "Air Drill", link: "/products/air-tool" },
            { title: "Air Grinder", link: "/products/air-tool" },
            { title: "Air Ratchet", link: "/products/air-tool" },
        ]
    },
    {
        category: "Aluminium Accessories",
        items: [
            { title: "Aluminium Sheet", link: "/products/aluminium-accessories" },
            { title: "Aluminium Extrusions", link: "/products/aluminium-accessories" },
            { title: "Aluminium Connectors", link: "/products/aluminium-accessories" },
            { title: "Aluminium Brackets", link: "/products/aluminium-accessories" },
        ]
    },
    {
        category: "Aluminium Profile",
        items: [
            { title: "T-Slot Profile", link: "/products/aluminium-profile" },
            { title: "V-Slot Profile", link: "/products/aluminium-profile" },
            { title: "Custom Aluminium Profile", link: "/products/aluminium-profile" },
            { title: "Profile Connectors", link: "/products/aluminium-profile" },
        ]
    },
    {
        category: "Ball Screws & Linear Guides",
        items: [
            { title: "Ball Screws", link: "/products/ball-screws" },
            { title: "Linear Rails", link: "/products/ball-screws" },
            { title: "Linear Bearings", link: "/products/ball-screws" },
            { title: "Guide Blocks", link: "/products/ball-screws" },
        ]
    },
    {
        category: "Bearings",
        items: [
            { title: "Ball Bearings", link: "/products/bearings" },
            { title: "Roller Bearings", link: "/products/bearings" },
            { title: "Thrust Bearings", link: "/products/bearings" },
            { title: "Needle Bearings", link: "/products/bearings" },
        ]
    },
    // {
    //     category: "Carrlane Tooling Components",
    //     items: [
    //         { title: "Clamps", link: "/products/carrlane-tooling" },
    //         { title: "Locating Pins", link: "/products/carrlane-tooling" },
    //         { title: "Fixture Plates", link: "/products/carrlane-tooling" },
    //         { title: "Positioning Elements", link: "/products/carrlane-tooling" },
    //     ]
    // },
    {
        category: "Conveyor & Automation",
        items: [
            { title: "Conveyor Belts", link: "/products/conveyor-automation" },
            { title: "Roller Conveyors", link: "/products/conveyor-automation" },
            { title: "Automated Sorting Systems", link: "/products/conveyor-automation" },
            { title: "Conveyor Chains", link: "/products/conveyor-automation" },
        ]
    },
    {
        category: "Conveyor Rollers",
        items: [
            { title: "Steel Rollers", link: "/products/conveyor-rollers" },
            { title: "Plastic Rollers", link: "/products/conveyor-rollers" },
            { title: "Rubber-Coated Rollers", link: "/products/conveyor-rollers" },
            { title: "Heavy-Duty Rollers", link: "/products/conveyor-rollers" },
        ]
    },
    {
        category: "Cutting Tool",
        items: [
            { title: "End Mills", link: "/products/cutting-tool" },
            { title: "Drill Bits", link: "/products/cutting-tool" },
            { title: "Saw Blades", link: "/products/cutting-tool" },
            { title: "Cutting Discs", link: "/products/cutting-tool" },
        ]
    },
    {
        category: "Destaco",
        items: [
            { title: "Toggle Clamps", link: "/products/destaco" },
            { title: "Power Clamps", link: "/products/destaco" },
            { title: "Robotic Grippers", link: "/products/destaco" },
            { title: "Manual Clamps", link: "/products/destaco" },
        ]
    },
    {
        category: "Drive Accessories",
        items: [
            { title: "Gearboxes", link: "/products/drive-accessories" },
            { title: "Couplings", link: "/products/drive-accessories" },
            { title: "Pulleys", link: "/products/drive-accessories" },
            { title: "Drive Belts", link: "/products/drive-accessories" },
        ]
    },
    {
        category: "Fasteners",
        items: [
            { title: "Nuts", link: "/products/fasteners" },
            { title: "Bolts", link: "/products/fasteners" },
            { title: "Screws", link: "/products/fasteners" },
            { title: "Washers", link: "/products/fasteners" },
        ]
    },
    {
        category: "Gearbox And Motor",
        items: [
            { title: "AC Motors", link: "/products/gearbox-motor" },
            { title: "DC Motors", link: "/products/gearbox-motor" },
            { title: "Gear Reducers", link: "/products/gearbox-motor" },
            { title: "Stepper Motors", link: "/products/gearbox-motor" },
        ]
    },
    {
        category: "Gripper",
        items: [
            { title: "Mechanical Grippers", link: "/products/gripper" },
            { title: "Pneumatic Grippers", link: "/products/gripper" },
            { title: "Vacuum Grippers", link: "/products/gripper" },
            { title: "Electric Grippers", link: "/products/gripper" },
        ]
    },
    {
        category: "Hand Tools",
        items: [
            { title: "Wrenches", link: "/products/hand-tools" },
            { title: "Hammers", link: "/products/hand-tools" },
            { title: "Screwdrivers", link: "/products/hand-tools" },
            { title: "Pliers", link: "/products/hand-tools" },
        ]
    },
    {
        category: "Hydraulics",
        items: [
            { title: "Hydraulic Pumps", link: "/products/hydraulics" },
            { title: "Hydraulic Cylinders", link: "/products/hydraulics" },
            { title: "Hydraulic Valves", link: "/products/hydraulics" },
            { title: "Hydraulic Hoses", link: "/products/hydraulics" },
        ]
    },
    {
        category: "Measuring Tools",
        items: [
            { title: "Calipers", link: "/products/measuring-tools" },
            { title: "Micrometers", link: "/products/measuring-tools" },
            { title: "Dial Indicators", link: "/products/measuring-tools" },
            { title: "Tape Measures", link: "/products/measuring-tools" },
        ]
    },
    {
        category: "Pillow Blocks",
        items: [
            { title: "Ball Bearing Units", link: "/products/pillow-blocks" },
            { title: "Flange Bearings", link: "/products/pillow-blocks" },
            { title: "Mounted Bearings", link: "/products/pillow-blocks" },
            { title: "Split Housing Bearings", link: "/products/pillow-blocks" },
        ]
    },
    {
        category: "Pneumatic Items",
        items: [
            { title: "Pneumatic Cylinders", link: "/products/pneumatic-items" },
            { title: "Solenoid Valves", link: "/products/pneumatic-items" },
            { title: "Pneumatic Fittings", link: "/products/pneumatic-items" },
            { title: "Air Regulators", link: "/products/pneumatic-items" },
        ]
    },
    {
        category: "Power Tools",
        items: [
            { title: "Cordless Drills", link: "/products/power-tools" },
            { title: "Angle Grinders", link: "/products/power-tools" },
            { title: "Circular Saws", link: "/products/power-tools" },
            { title: "Jigsaws", link: "/products/power-tools" },
        ]
    },
    {
        category: "Robot Scara & 6-Axis",
        items: [
            { title: "SCARA Robots", link: "/products/robot-scara" },
            { title: "6-Axis Robots", link: "/products/robot-scara" },
            { title: "Robot Controllers", link: "/products/robot-scara" },
            { title: "End Effectors", link: "/products/robot-scara" },
        ]
    }
];


type Items = { title: string, link: string }[]

const Products = () => {
    const [selectedItems, setSelectedItems] = useState<Items | null>(categories[0].items);
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <div className='min-h-screen relative'>
            <Image className="fixed -z-30 w-screen h-screen inset-0" src="/images/home_bg3.png" alt="Products" width={1920} height={1080} />
            <div className='max-w-[85rem] mx-auto p-5 mt-5 flex gap-10 relative min-h-screen'>
                <aside className='sticky top-0 self-start p-5 rounded-lg max-h-[80vh] overflow-y-auto border border-accent-magenta/10 bg-accent-magenta/5 w-72 flex flex-col gap-3'>
                    <h1 className='text-lg font-semibold'>Categories</h1>
                    <div className='flex flex-col gap-2 pl-1'>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedItems(category.items);
                                    setSelectedCategory(index);
                                }}
                                className={cn(
                                    "p-1 px-3 flex justify-start items-start rounded-md transition-all duration-200 hover:bg-accent-magenta/20 cursor-pointer",
                                    selectedCategory === index && "bg-accent-magenta/20"
                                )}
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>
                </aside>
                <main className='flex-1'>
                    <ProductList products={selectedItems} />
                </main>
            </div>
        </div>
    )
}

export default Products
