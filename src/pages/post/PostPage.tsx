const posts = [
    {
        title: "Giới thiệu về React",
        thumbnailURL:
            "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F15t6fr44mdl8vd73pdpm.png",
        categories: "React",
        content: "React là thư viện JavaScript xây dựng giao diện người dùng.",
        author: "Doris Dev",
        createdAt: "2025-07-03T11:00:00Z",
        lastReadAt: "2025-07-07T12:00:00Z",
    },
    {
        title: "Sử dụng Tailwind CSS trong dự án",
        thumbnailURL:
            "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F15t6fr44mdl8vd73pdpm.png",
        categories: "CSS",
        content: "Tailwind giúp bạn viết style nhanh chóng bằng utility classes.",
        author: "Vivi Mentor",
        createdAt: "2025-07-02T9:00:00Z",
        lastReadAt: "2025-07-06T08:30:00Z",
    },
    {
        title: "Lập trình tư duy component",
        thumbnailURL:
            "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F15t6fr44mdl8vd73pdpm.png",
        categories: "Design",
        content: "Component giúp chia nhỏ giao diện và dễ tái sử dụng.",
        author: "Yan Huang",
        createdAt: "2025-07-03T15:00:00Z",
        lastReadAt: "2025-07-07T09:00:00Z",
    },
    {
        title: "Giới thiệu về React",
        thumbnailURL:
            "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F15t6fr44mdl8vd73pdpm.png",
        categories: "React",
        content: "React là thư viện JavaScript xây dựng giao diện người dùng.",
        author: "Doris Dev",
        createdAt: "2025-07-01T09:00:00Z",
        lastReadAt: "2025-07-07T12:00:00Z",
    },
    {
        title: "Sử dụng Tailwind CSS trong dự án",
        thumbnailURL:
            "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F15t6fr44mdl8vd73pdpm.png",
        categories: "CSS",
        content: "Tailwind giúp bạn viết style nhanh chóng bằng utility classes.",
        author: "Vivi Mentor",
        createdAt: "2025-07-02T10:00:00Z",
        lastReadAt: "2025-07-06T08:30:00Z",
    },
    {
        title: "Lập trình tư duy component",
        thumbnailURL:
            "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F15t6fr44mdl8vd73pdpm.png",
        categories: "Design",
        content: "Component giúp chia nhỏ giao diện và dễ tái sử dụng.",
        author: "Yan Huang",
        createdAt: "2025-07-03T13:00:00Z",
        lastReadAt: "2025-07-07T09:00:00Z",
    },
];

export const PostPage = () => {


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Post Page</h1>
            {/* Content for the Post Page goes here */}
        </div>
    );
}