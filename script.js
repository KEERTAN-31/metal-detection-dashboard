/* Radar Sweep Effect */
.radar-sweep {
    background: conic-gradient(from 0deg, rgba(6, 182, 212, 0.2) 0%, transparent 25%);
    animation: sweep 4s linear infinite;
}

@keyframes sweep {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Warning Glows for the ML Classification */
.glow-safe { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
.glow-warning { box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
.glow-danger { 
    box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); 
    animation: pulse-danger 1s infinite;
}

@keyframes pulse-danger {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* Background Grid (Visualization Layer) */
.bg-grid {
    background-image: radial-gradient(#1e293b 1px, transparent 1px);
    background-size: 30px 30px;
}
