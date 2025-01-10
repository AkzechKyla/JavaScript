import React, { useState } from 'react';

export function DashboardStats({ metrics }) {
    const [dateRange, setDateRange] = useState('current-month');
    const [issueType, setIssueType] = useState('all');
    const [department, setDepartment] = useState('all');
    const [category, setCategory] = useState('all');

    const handleFilterChange = () => {
        console.log("Filters applied:", { dateRange, issueType, department, category });
    };

    // Define status colors
    const statusColors = {
        open: 'bg-orange-400',
        inProgress: 'bg-green-400',
        onHold: 'bg-red-400',
        resolved: 'bg-blue-400',
        unresolved: 'bg-gray-300',
        totalConcerns: 'bg-gray-600',
    };

    return (
        <div className="rounded-lg p-4 mb-4">
            {/* Filters Section */}
            <div className="flex flex-wrap mb-4 gap-4 items-center">
                <div className="w-28">
                    <label htmlFor="date-range" className="block text-gray-700 text-xs">Date Range</label>
                    <select
                        id="date-range"
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="border rounded w-full p-1 text-xs"
                    >
                        <option value="current-month">Current Month</option>
                        <option value="last-month">Last Month</option>
                        <option value="custom">Custom Range</option>
                    </select>
                </div>
                <div className="w-28">
                    <label htmlFor="issue-type" className="block text-gray-700 text-xs">Issue Type</label>
                    <select
                        id="issue-type"
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
                        className="border rounded w-full p-1 text-xs"
                    >
                        <option value="all">All</option>
                        <option value="concern">Concern</option>
                        <option value="request">Request</option>
                        <option value="complaint">Complaint</option>
                    </select>
                </div>
                <div className="w-28">
                    <label htmlFor="department" className="block text-gray-700 text-xs">Department</label>
                    <select
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="border rounded w-full p-1 text-xs"
                    >
                        <option value="all">All</option>
                        <option value="computer-science">Computer Science</option>
                        <option value="information-technology">Information Technology</option>
                    </select>
                </div>
                <div className="w-28">
                    <label htmlFor="category" className="block text-gray-700 text-xs">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border rounded w-full p-1 text-xs"
                    >
                        <option value="all">All</option>
                        <option value="enrollment">Enrollment</option>
                        <option value="scholarship">Scholarship</option>
                        <option value="schedule">Schedule</option>
                        <option value="laboratory">Laboratory</option>
                    </select>
                </div>
            </div>

            {/* Metrics Section */}
            <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
                {Object.entries(metrics).map(([status, count], index) => (
                    <div
                        key={status}
                        className={`flex items-center space-x-2 p-3 ${
                            index !== 0 ? 'border-l-2 border-gray-300' : ''
                        }`}
                    >
                        <span
                            className={`inline-block w-10 h-10 rounded-full ${statusColors[status] || 'bg-gray-400'}`}
                        ></span>
                        <div>
                            <h3 className="text-sm font-semibold capitalize">{status.replace(/([A-Z])/g, ' $1')}</h3>
                            <p className="text-xl">{count || 0}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardStats;
