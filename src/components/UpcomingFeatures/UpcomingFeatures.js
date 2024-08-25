import React from 'react';
import { Typography, List, Row, Col } from 'antd';

const { Title, Text } = Typography;

function UpcomingFeatures() {
    const features = [
        {
            title: "Image Reordering",
            details: [
                "Drag-and-Drop Reordering: Implement drag-and-drop functionality so users can rearrange the order of images. This is useful if the order of images in the PDF is important.",
                "Reorder Buttons: Add 'Move Up' and 'Move Down' buttons to each card to allow users to manually reorder images."
            ]
        },
        {
            title: "Image Cropping",
            details: [
                "Crop Tool: Integrate a cropping tool to allow users to crop images before adding them to the PDF. This can be done using libraries like react-image-crop."
            ]
        },
        {
            title: "Image Filters and Adjustments",
            details: [
                "Basic Filters: Allow users to apply basic filters (e.g., grayscale, sepia) or adjustments (e.g., brightness, contrast) to images.",
                "Custom Image Editor: Integrate an image editor for more advanced editing options (e.g., drawing, text overlay)."
            ]
        },
        {
            title: "Multiple File Types",
            details: [
                "Support for More Formats: Extend the functionality to support more file formats like .gif, .bmp, .tiff, etc.",
                "Automatic Conversion: Automatically convert unsupported file formats to a compatible format (like JPEG) before adding them to the PDF."
            ]
        },
        {
            title: "PDF Layout Customization",
            details: [
                "Grid Layout Options: Offer different grid layouts for arranging images on a PDF page (e.g., 2x2 grid, 3x3 grid).",
                "Page Margins and Spacing: Allow users to customize the margins, padding, and spacing between images on the PDF pages."
            ]
        },
        {
            title: "Batch Operations:",
            details: [
               "Batch Resizing: Add a feature that allows users to resize all images at once to the same dimensions.",
               "Batch Description Editing: Provide an option to apply the same description to multiple images."
            ]
        },
        {
            title: "Watermarking",
            details: [
               "Add Watermark: Allow users to add a watermark to all images in the PDF. The watermark could be text or an image, with customizable opacity and position."
            ]
        }, {
            title: "Annotations",
            details: [
               "Image Annotations: Allow users to annotate images with text, shapes, arrows, or highlights.",
               "Interactive PDF Elements: Include interactive elements like hyperlinks or form fields in the PDF."
            ]
        }, {
            title: "Image Compression:",
            details: [
               "Compress Images: Implement image compression to reduce the file size of the final PDF, especially if multiple images are included."
            ]
        }, {
            title: "Multiple Pages Per Image:",
            details: [
               "Splitting Images Across Pages: If an image is too large, allow it to be split across multiple pages, with the option to specify where the split occurs."
            ]
        }, {
            title: "Image Metadata:",
            details: [
               "Display Metadata: Show basic image metadata (e.g., resolution, file size, date taken) in the card.",
               "Include Metadata in PDF: Option to include or exclude image metadata in the PDF."
            ]
        }, {
            title: "Dark Mode Support:",
            details: [
               "Theme Toggle: Add support for dark mode, making the UI easier on the eyes in low-light conditions.",
               "Customizable Theme: Allow users to switch between light, dark, or custom themes."
            ]
        }, {
            title: "Image Search and Filtering:",
            details: [
               "Search by Filename: Allow users to search for specific images by their filename within the uploader.",
               "Filter by Type/Size: Implement filtering options to display only certain types of images (e.g., based on size, format)."
            ]
        }, {
            title: "Image Preview Enhancements:",
            details: [
               "Full-Screen Preview: Offer a full-screen mode for previewing images.",
               "Zoom and Pan: Add zoom and pan functionality to the image preview modal."
            ]
        }, {
            title: "Save and Load Projects:",
            details: [
               "Save Progress: Allow users to save their current project (uploaded images, descriptions, order, etc.) and reload it later.",
               "Export/Import Configuration: Provide options to export or import the current configuration, useful for collaborative work"
            ]
        },
        {
            title: "Export Options:",
            details: [
               "Multiple Formats: Allow the PDF to be exported in different formats, such as .png, .jpeg, or .docx.",
               "Email or Share Link: Provide options to email the generated PDF directly from the app or generate a shareable link."
            ]
        },
        {
            title: "Undo/Redo Functionality:",
            details: [
               "Undo/Redo Actions: Add undo/redo functionality to revert or reapply the last actions, like image deletion, resizing, or description edits.",
            ]
        },
        {
            title: "Accessibility Features:",
            details: [
               "Screen Reader Support: Ensure the application is accessible to users with disabilities by providing screen reader support.",
               "Keyboard Shortcuts: Implement keyboard shortcuts for common actions like uploading, deleting, or previewing images."
            ]
        },
        {
            title: "Image Grouping:",
            details: [
               "Group Images: Allow users to group images together and manage them as a single unit, both in the UI and in the final PDF.",
               "Group Descriptions: Add descriptions or annotations that apply to an entire group of images."
            ]
        },
        {
            title: "Internationalization (i18n):",
            details: [
               "Language Support: Add support for multiple languages and allow users to switch between them.",
               "RTL Layouts: Ensure that the layout supports right-to-left (RTL) languages like Arabic or Hebrew."
            ]
        },
        {
            title: "Responsive Design:",
            details: [
               "Mobile Optimization: Optimize the UI for mobile devices, allowing users to manage images and create PDFs on the go.",
               "Adaptive Layouts: Ensure the layout adapts seamlessly to different screen sizes and resolutions."
            ]
        },
        {
            title: "User Authentication and Multi-User Support:",
            details: [
               "User Accounts: Implement user authentication to save personalized settings, preferences, and project history.",
               "Multi-User Collaboration: Allow multiple users to collaborate on the same project, with real-time updates and permissions."
            ]
        },
        {
            title: "Advanced Export Features:",
            details: [
               "Password-Protected PDFs: Allow users to create password-protected PDFs for sensitive documents.",
               "Digital Signatures: Implement digital signature support within the PDF."
            ]
        },{
            title: " Performance Optimizations:",
            details: [
               "Lazy Loading: Implement lazy loading for images to improve performance when dealing with a large number of files.",
               "Caching: Cache image previews to reduce loading times when switching between images."
            ]
        },{
            title: "",
            details: [
               ""
            ]
        },{
            title: "",
            details: [
               ""
            ]
        },{
            title: "",
            details: [
               ""
            ]
        },{
            title: "",
            details: [
               ""
            ]
        },
        // Add other features similarly...
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Row justify="center">
                <Col xs={24} sm={16} md={12} lg={8} xl={6}>
                    <Title level={2} style={{ marginBottom: '20px' }}>Upcoming Features</Title>
                    <List
                        itemLayout="vertical"
                        dataSource={features}
                        renderItem={(item) => (
                            <List.Item>
                                <Title level={4}>{item.title}</Title>
                                <List
                                    dataSource={item.details}
                                    renderItem={(detail) => (
                                        <List.Item>
                                            <Text>{detail}</Text>
                                        </List.Item>
                                    )}
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default UpcomingFeatures;
