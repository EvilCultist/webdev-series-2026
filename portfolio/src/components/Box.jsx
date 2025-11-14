// Box.jsx - reusable container for cards/sections
export default function Box({children, style={}}){
  return (
    <div
      style={{
        padding: 12,
        border: '1px solid #e6eef8',
        borderRadius: 8,
        marginBottom: 12,
        background: '#fff',
        ...style
      }}
    >
      {children}
    </div>
  )
}