function RemainingMessage({ remaining, total }) {
    return (
      <div className="mt-4 py-3 text-center bg-dark text-white">
        {remaining} of {total} Remaining
      </div>
    );
  }
  
  export default RemainingMessage;
  