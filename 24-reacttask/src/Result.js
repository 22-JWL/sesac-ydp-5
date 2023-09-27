function Result({ content, img, bColor, color }) {
  return (
    <div style={{ display: 'block' }}>
      <img src={img} width={100} height={100} alt={img} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: bColor,
          color: color,
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Result;
