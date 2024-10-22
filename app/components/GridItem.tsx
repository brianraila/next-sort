const FileInfoDisplay = ({
  filename = "document.pdf",
  timestamp = "2024-10-22 15:30:25",
}) => {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  
  return (
    <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-200 max-w-md hover:shadow-md transition-shadow duration-200">
      {/* Timestamp as metadata/caption */}
      <div className="text-xs text-gray-500 mb-2">
        {formatTimestamp(timestamp)}
      </div>

      {/* Filename section */}
      <div className="flex items-center">
        <span className="text-blue-500 text-sm font-medium mr-2">📄</span>
        <span className="text-sm font-medium text-gray-900 truncate">
          {filename}
        </span>
      </div>
    </div>
  );
};

export default FileInfoDisplay;
