const Chip = ({ name, classes }) => {
  return (
    <button className={`max-w-max border rounded-full px-3  ${classes}`}>
      <p>{name}</p>
    </button>
  );
};

export default Chip;
