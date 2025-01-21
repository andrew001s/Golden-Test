import React from 'react'

interface PaginationProps {
    page: number;
    pageSize: number;
    total: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ page, pageSize, total, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(total / pageSize);  

    return (
        <div className='flex flex-row space-x-6 mt-4'>
            <div className="text-gray-500">
                <button 
                    onClick={() => onPageChange(page - 1)} 
                    disabled={page === 0}
                >
                    Previous
                </button>
            </div>
            <div className="text-gray-500">
                <button 
                    onClick={() => onPageChange(page + 1)} 
                    disabled={page === totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination
