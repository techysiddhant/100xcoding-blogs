"use client";
const features = [
    {
        icon: '🎯',
        title: 'Focused Learning Paths',
        description: 'Navigate curated paths from fundamentals to advanced concepts.',
    },
    {
        icon: '💡',
        title: 'Expert-Led Content',
        description: 'Articles and tutorials written by industry professionals.',
    },
    {
        icon: '🛠',
        title: 'Practical Resources',
        description: 'Access code snippets, templates, and best practice guides.',
    },
    {
        icon: '🌐',
        title: 'Community Support',
        description: 'Engage with fellow developers and learn together.',
    },
];

export const Introduction = () => {
    return (
        <div className=" mt-12">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">
                Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card p-6 rounded-lg shadow-md bg-fd-background dark:bg-fd-background text-center border "
                    >
                        <div className="icon text-4xl mb-4 text-primary" style={{ color: '#24AE73' }}>
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

