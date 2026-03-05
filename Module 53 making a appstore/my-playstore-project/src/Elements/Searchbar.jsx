import { useState, useRef, useEffect } from "react";

const Searchbar = () => {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = focused || hovered;

  return (
    <div style={{
    //   minHeight: "100vh",
      background: "#0a0a0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{ position: "relative", width: "800px" }}>
        {/* Search Icon */}
        <svg
          style={{
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "17px",
            height: "17px",
            color: isActive ? "#a990ff" : "#7a7890",
            transition: "color 0.3s ease",
            pointerEvents: "none",
          }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search apps..."
          value={value}
          autoComplete="off"
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: "100%",
            padding: "20px 56px",
            background: isActive ? "#1e1e26" : "#1a1a1f",
            border: `1.5px solid ${focused ? "#7c4dff" : hovered ? "#5b3fa6" : "#2a2a32"}`,
            borderRadius: "10px",
            color: "#e0dff5",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            outline: "none",
            transition: "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
            boxShadow: focused
              ? "0 0 0 3px rgba(124,77,255,0.35), 0 0 20px rgba(124,77,255,0.5)"
              : hovered
              ? "0 0 0 3px rgba(124,77,255,0.25)"
              : "none",
          }}
        />

        {/* Filter Icon */}
        <svg
          style={{
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "17px",
            height: "17px",
            color: isActive ? "#a990ff" : "#7a7890",
            transition: "color 0.25s ease",
            cursor: "pointer",
          }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="10" y1="18" x2="14" y2="18" />
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;

;