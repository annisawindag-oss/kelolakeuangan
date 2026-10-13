export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        aria-hidden="true"
        viewBox="0 0 7 6"
        shapeRendering="crispEdges"
        className="h-6 w-7 text-candy-600"
        fill="currentColor"
      >
        <rect x="1" y="0" width="2" height="1" />
        <rect x="4" y="0" width="2" height="1" />
        <rect x="0" y="1" width="7" height="2" />
        <rect x="1" y="3" width="5" height="1" />
        <rect x="2" y="4" width="3" height="1" />
        <rect x="3" y="5" width="1" height="1" />
      </svg>
      <span className="font-pixel text-2xl font-bold">MyMoney</span>
    </div>
  )
}
