const BossBtn = ({ children }) => {
  return (
    <div className="text-center">
      <button className="btn btn-outline border-0 border-b-[3px] px-8 transition-all border-b-boss-btn-color">
        {children}
      </button>
    </div>
  );
};

export default BossBtn;
