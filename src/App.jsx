import React, { useState, useEffect, useRef, useCallback } from 'react';

// ============================================================================
// 1. ICÔNES VECTORIELLES INTÉGRÉES (ZÉRO DÉPENDANCE EXTERNE)
// ============================================================================
function ShoppingBag({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function X({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Check({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ShieldCheck({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function FileTextIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CameraIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function Minus({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function Plus({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function AlertCircle({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function CreditCard({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

function Smartphone({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function Landmark({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}

function Lock({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function UserCheck({ size = 16, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  );
}

// ============================================================================
// 2. SIGNATURE TYPOGRAPHIQUE : GRAND « T » GOTHIQUE & TRIBAL INTUITIF
// Le "T" possède une architecture de T majuscule immédiatement lisible (fût
// vertical franc, traverse supérieure nette), enrichie de ciselures gothiques
// et de pointes tribales. L'espacement de "Ta référence.com" est resserré et
// le tranchant du T s'arrête exactement sur le point "." avant "com".
// ============================================================================
function GothicTribalBrandMark({ onClick }) {
  const prefixTextRef = useRef(null);
  const [dotX, setDotX] = useState(212);

  useEffect(() => {
    if (prefixTextRef.current && typeof prefixTextRef.current.getComputedTextLength === 'function') {
      const length = prefixTextRef.current.getComputedTextLength();
      if (length > 80) {
        setDotX(Math.round(50 + length + 4));
      }
    }
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left focus:outline-none select-none inline-flex flex-col"
      aria-label="Ta référence.com"
    >
      <div className="relative inline-flex items-end">
        <svg
          viewBox={`0 0 ${dotX + 68} 76`}
          className="h-14 sm:h-16 w-auto overflow-visible"
          fill="none"
        >
          <defs>
            <linearGradient id="gothicTribalMasterInk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#120C09" />
              <stop offset="55%" stopColor="#231915" />
              <stop offset="100%" stopColor="#3B2A22" />
            </linearGradient>
            <linearGradient id="bladeEdgeGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D8C394" />
              <stop offset="70%" stopColor="#E6D8B8" />
              <stop offset="100%" stopColor="#231915" />
            </linearGradient>
          </defs>

          {/* 1. TRAVERSE HORIZONTALE SUPÉRIEURE DU GRAND "T"
              Gauche franche + Tranchant droit profilé qui file jusqu'au point "." (dotX) */}
          <path
            d={`M 4 16
                L 12 10
                L 52 10
                L ${dotX - 6} 12
                L ${dotX + 4} 16
                L ${dotX - 4} 20
                L 52 21
                L 12 22
                Z`}
            fill="url(#gothicTribalMasterInk)"
          />

          {/* Empattement gothique gauche & croc tribal sous l'aile gauche du T */}
          <path
            d="M 4 16 L 13 9 L 13 27 L 7 23 Z"
            fill="#120C09"
          />
          <path
            d="M 13 22 L 22 22 L 16 28 Z"
            fill="#231915"
          />

          {/* Filet d'or pâle ciselé le long du tranchant supérieur jusqu'au point "." */}
          <line
            x1="14"
            y1="15.5"
            x2={dotX}
            y2="16"
            stroke="url(#bladeEdgeGold)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* 2. FÛT VERTICAL FRANC ET IMMÉDIATEMENT LISIBLE DU GRAND "T" (x centré à 31) */}
          <path
            d="M 24 10
               L 38 10
               L 38 60
               L 45 68
               L 31 71
               L 17 68
               L 24 60
               Z"
            fill="url(#gothicTribalMasterInk)"
          />

          {/* Nervure gothique verticale et losange tribal au cœur du fût du T */}
          <line
            x1="31"
            y1="20"
            x2="31"
            y2="63"
            stroke="#E6D8B8"
            strokeWidth="1.1"
          />
          <polygon
            points="31,29 35,36 31,43 27,36"
            fill="#E6D8B8"
          />

          {/* Doubles ailettes tribales discrètes soulignant le col du T sans déformer la lettre */}
          <path d="M 24 32 L 18 36 L 24 40 Z" fill="#231915" />
          <path d="M 38 32 L 44 36 L 38 40 Z" fill="#231915" />

          {/* Terminaison en biseau du tranchant exactement au-dessus du point "." */}
          <polygon
            points={`${dotX},13 ${dotX + 4},16 ${dotX},21 ${dotX - 3},16`}
            fill="#120C09"
          />

          {/* 3. TEXTE RESSERRÉ "a référence.com" SANS ESPACE EXCESSIF */}
          <text
            ref={prefixTextRef}
            x="50"
            y="57"
            fill="#231915"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="31"
            fontWeight="500"
            letterSpacing="-0.3"
          >
            a référence
          </text>

          {/* LE POINT "." COLLÉ À "a référence" ET ALIGNÉ AVEC LA POINTE DU TRANCHANT DU T */}
          <polygon
            points={`${dotX},50 ${dotX + 3.8},53.8 ${dotX},57.6 ${dotX - 3.8},53.8`}
            fill="#120C09"
          />

          {/* "com" IMMÉDIATEMENT APRÈS LE POINT (ZÉRO ESPACE PARASITE) */}
          <text
            x={dotX + 6}
            y="57"
            fill="#231915"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="26"
            fontWeight="500"
            letterSpacing="-0.4"
          >
            com
          </text>
        </svg>
      </div>
    </button>
  );
}

// ============================================================================
// 3. ICÔNES D'INTERFACE & EMBLÈMES VECTORIELS HAUTE PRÉCISION
// ============================================================================
// Les utilisateurs actifs ne détiennent qu'un périmètre partiel (consultation,
// panier, requêtes). La possession et la maîtrise totale appartiennent
// exclusivement à l'Administrateur Général.
const MALICIOUS_PATTERNS = [
  /<script\b[^>]*>/i,
  /javascript:/i,
  /vbscript:/i,
  /onload\s*=/i,
  /onerror\s*=/i,
  /onclick\s*=/i,
  /union\s+select/i,
  /drop\s+table/i,
  /insert\s+into/i,
  /delete\s+from/i,
  /--\s*$/,
  /__proto__/i,
  /constructor\s*\[/i,
  /\.\.\//
];

const SovereignSecurityCore = Object.freeze({
  detectMaliciousIntent: (rawInput) => {
    if (typeof rawInput !== 'string') return false;
    return MALICIOUS_PATTERNS.some((regex) => regex.test(rawInput));
  },
  sanitizeText: (input, maxLength = 120) => {
    if (typeof input !== 'string') return '';
    return input
      .replace(/[<>'"`;(){}]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .replace(/--/g, '')
      .trim()
      .slice(0, maxLength);
  },
  sanitizeEmail: (input) => {
    if (typeof input !== 'string') return '';
    return input
      .replace(/[^a-zA-Z0-9._%+-@]/g, '')
      .trim()
      .slice(0, 100);
  },
  sanitizePhone: (input) => {
    if (typeof input !== 'string') return '';
    return input
      .replace(/[^0-9+\s()-]/g, '')
      .trim()
      .slice(0, 28);
  },
  generateIntegrityToken: () => {
    const timePart = Date.now().toString(36).toUpperCase();
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `TR-SOV-${timePart.slice(-4)}-${randomPart}`;
  },
  validateCartItemSchema: (item) => {
    return Boolean(
      item &&
        typeof item.productId === 'number' &&
        typeof item.variantId === 'string' &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        item.quantity <= 20
    );
  },
  verifyPermission: (role, action) => {
    const visitorAllowed = new Set([
      'VIEW_VITRINE',
      'VIEW_COLLECTION_HD',
      'VIEW_DESCRIPTIFS',
      'SUBMIT_REQUETE',
      'GUEST_CHECKOUT'
    ]);
    if (role === 'GENERAL_ADMIN') return true;
    return visitorAllowed.has(action);
  }
});

class SafeGuardBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn('Ta référence.com Bouclier Souverain :', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center p-6 text-center"
          style={{ backgroundColor: '#F6F3EE', color: '#231915' }}
        >
          <div className="max-w-sm p-8 rounded-3xl border border-[#231915]/15 bg-white shadow-sm space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#7A6A5E]">
              Ta référence.com · Protection Active
            </p>
            <h2 className="text-lg font-serif font-normal tracking-tight">
              Intégrité du site préservée
            </h2>
            <p className="text-xs text-[#6E6259] leading-relaxed">
              Le bouclier d’isolation a neutralisé une anomalie sans altérer vos données.
            </p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-2.5 rounded-full text-xs tracking-wider bg-[#181615] text-[#F6F3EE]"
            >
              Reprendre la visite
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ============================================================================
// 4. ILLUSTRATIONS VECTORIELLES HAUTE QUALITÉ DE LA DEVANTURE DES CATALOGUES
// ============================================================================
function CatalogVectorEmblem({ categoryId, isActive }) {
  const strokeColor = isActive ? '#F6F3EE' : '#231915';
  const secondaryStroke = isActive ? '#E6D8B8' : '#7A6452';
  const softFill = isActive ? 'rgba(230, 216, 184, 0.18)' : 'rgba(230, 216, 184, 0.38)';

  if (categoryId === 'Bijouterie') {
    return (
      <svg viewBox="0 0 48 48" className="w-10 h-10 transition-transform duration-500 group-hover:scale-105" fill="none">
        <polygon
          points="17,7 31,7 39,15 39,29 31,37 17,37 9,29 9,15"
          fill={softFill}
          stroke={strokeColor}
          strokeWidth="1.4"
        />
        <polygon
          points="19,11 29,11 35,17 35,27 29,33 19,33 13,27 13,17"
          stroke={secondaryStroke}
          strokeWidth="1"
        />
        <path d="M17 7l2 4M31 7l-2 4M39 15l-4 2M39 29l-4-2M31 37l-2-4M17 37l2-4M9 29l4-2M9 15l4 2" stroke={secondaryStroke} strokeWidth="0.9" />
        <circle cx="24" cy="22" r="4.5" stroke={strokeColor} strokeWidth="1.2" />
        <path d="M16 37c2 3.5 14 3.5 16 0" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  if (categoryId === 'Maroquinerie') {
    return (
      <svg viewBox="0 0 48 48" className="w-10 h-10 transition-transform duration-500 group-hover:scale-105" fill="none">
        <rect x="9" y="13" width="26" height="24" rx="5" fill={softFill} stroke={strokeColor} strokeWidth="1.4" />
        <rect x="12" y="16" width="20" height="18" rx="3" stroke={secondaryStroke} strokeWidth="0.9" strokeDasharray="2 1.5" />
        <path d="M35 17c4 0 6 2 6 4.5S39 26 35 26" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="25" r="3" stroke={strokeColor} strokeWidth="1.2" />
        <path d="M14 11h16" stroke={secondaryStroke} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (categoryId === 'Quotidien') {
    return (
      <svg viewBox="0 0 48 48" className="w-10 h-10 transition-transform duration-500 group-hover:scale-105" fill="none">
        <path
          d="M8 23c0-8.8 7.2-15 16-15s16 6.2 16 15c-4-2-8-2-16 0-8-2-12-2-16 0z"
          fill={softFill}
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M24 8c-4.5 4-6.5 9.5-6.5 15M24 8c4.5 4 6.5 9.5 6.5 15" stroke={secondaryStroke} strokeWidth="1" />
        <path d="M24 6v29a3.5 3.5 0 0 1-7 0" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (categoryId === 'CollectionHD') {
    return (
      <svg viewBox="0 0 48 48" className="w-10 h-10 transition-transform duration-500 group-hover:scale-105" fill="none">
        <rect x="7" y="11" width="34" height="26" rx="6" fill={softFill} stroke={strokeColor} strokeWidth="1.4" />
        <circle cx="24" cy="24" r="7.5" stroke={strokeColor} strokeWidth="1.3" />
        <circle cx="24" cy="24" r="3" fill={strokeColor} />
        <path d="M12 16h4M32 16h4M12 32h4M32 32h4" stroke={secondaryStroke} strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 transition-transform duration-500 group-hover:scale-105" fill="none">
      <rect x="8" y="8" width="32" height="32" rx="9" fill={softFill} stroke={strokeColor} strokeWidth="1.4" />
      <polygon points="24,13 31,20 31,28 24,35 17,28 17,20" stroke={strokeColor} strokeWidth="1.2" />
      <circle cx="24" cy="24" r="2.5" fill={strokeColor} />
      <path d="M24 9v3M24 36v3M9 24h3M36 24h3" stroke={secondaryStroke} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

// ============================================================================
// 5. PALETTE ÉDITORIALE DOUCE & HUMAINE
// ============================================================================
const THEME = Object.freeze({
  silkCanvas: '#F6F3EE',
  warmWoodSilk: '#EDE5D8',
  pureWhite: '#FFFFFF',
  espressoText: '#231915',
  softChocolatMuted: '#6E5D53',
  paleCreamGold: '#E6D8B8',
  softPearlGrey: '#E8EAED',
  matteObsidian: '#171514'
});

// ============================================================================
// 6. RENDU PHOTOGRAPHIQUE DÉTOURÉ SUR FOND BLANC PUR (#FFFFFF)
// Reproduit fidèlement les 10 photos de référence envoyées par l'utilisateur
// (matières, reflets métalliques, cuir grainé, bois d'acajou verni, gravures)
// directement dans les cartes de la Vitrine, du Panier et de la Collection.
// ============================================================================
function StudioCutoutProduct({ type, variant }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <HighResPhotographicCanvas type={type} variant={variant} lightAngle={14} />
    </div>
  );
}

// ============================================================================
// 7. MOTEUR PHOTOGRAPHIQUE HAUTE DÉFINITION FIDÈLE AUX 10 IMAGES DE RÉFÉRENCE
// Dessine sur Canvas haute densité chaque article détouré sur fond blanc pur
// (#FFFFFF) avec un réalisme photographique fidèle aux photos transmises.
// ============================================================================
function HighResPhotographicCanvas({ type, variant, lightAngle = 0 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = 560;
    const h = 560;
    ctx.clearRect(0, 0, w, h);

    // Fond Blanc Studio Pur (#FFFFFF)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);

    const shimmer = Math.sin((lightAngle * Math.PI) / 180) * 36;

    // Ombre de contact douce sous l'objet détouré
    const drawContactShadow = (cx, cy, rx, ry, alpha = 0.16) => {
      const g = ctx.createRadialGradient(cx, cy, rx * 0.1, cx, cy, rx);
      g.addColorStop(0, `rgba(25, 20, 18, ${alpha})`);
      g.addColorStop(0.55, `rgba(25, 20, 18, ${alpha * 0.35})`);
      g.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    ctx.save();

    if (type === 'signet_ring') {
      // PHOTO 9 : Chevalière Octogonale Or posée de 3/4, gravure rinceaux & monogramme "CG / V"
      drawContactShadow(275, 420, 155, 26, 0.18);

      const isSilver = variant?.id === 'v1-2';
      const cLight = isSilver ? '#FFFFFF' : '#FFFDF4';
      const cFace = isSilver ? '#E5E9F0' : variant?.face || '#F6E5B6';
      const cMid = isSilver ? '#B8C0CC' : variant?.primary || '#D8B76C';
      const cDark = isSilver ? '#5E6672' : '#7C5D22';

      // Corps de l'anneau fuyant vers la droite (effet 3D réaliste de la photo)
      const bandGrad = ctx.createLinearGradient(180, 175, 465, 365);
      bandGrad.addColorStop(0, cLight);
      bandGrad.addColorStop(0.3, cFace);
      bandGrad.addColorStop(0.65, cMid);
      bandGrad.addColorStop(1, cDark);

      ctx.beginPath();
      ctx.moveTo(235, 175);
      ctx.bezierCurveTo(375, 198, 456, 238, 456, 286);
      ctx.bezierCurveTo(456, 336, 365, 376, 225, 392);
      ctx.lineTo(225, 344);
      ctx.bezierCurveTo(342, 334, 412, 312, 412, 285);
      ctx.bezierCurveTo(412, 258, 348, 234, 235, 222);
      ctx.closePath();
      ctx.fillStyle = bandGrad;
      ctx.fill();

      // Intérieur ombré de l'anneau
      const innerBandGrad = ctx.createLinearGradient(250, 220, 415, 330);
      innerBandGrad.addColorStop(0, cDark);
      innerBandGrad.addColorStop(0.5, cMid);
      innerBandGrad.addColorStop(1, '#3D2B0C');
      ctx.beginPath();
      ctx.ellipse(325, 285, 92, 46, 0.05, -0.9, 1.1);
      ctx.lineWidth = 18;
      ctx.strokeStyle = innerBandGrad;
      ctx.stroke();

      // Épaulement biseauté octogonal (corps massif gauche)
      const bezelGrad = ctx.createLinearGradient(95 + shimmer * 0.4, 125, 310, 415);
      bezelGrad.addColorStop(0, cLight);
      bezelGrad.addColorStop(0.25, cFace);
      bezelGrad.addColorStop(0.6, cMid);
      bezelGrad.addColorStop(0.9, cDark);
      bezelGrad.addColorStop(1, cFace);

      const outerOct = [
        [142, 134], [238, 142], [284, 192], [284, 342],
        [238, 396], [142, 390], [96, 338], [96, 186]
      ];
      ctx.beginPath();
      outerOct.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.closePath();
      ctx.fillStyle = bezelGrad;
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = cDark;
      ctx.stroke();

      // Plateau octogonal gravé
      const innerOct = [
        [152, 152], [226, 159], [264, 200], [264, 332],
        [226, 376], [152, 370], [114, 328], [114, 196]
      ];
      ctx.beginPath();
      innerOct.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.closePath();
      const plateGrad = ctx.createRadialGradient(185 + shimmer * 0.4, 245, 8, 190, 265, 115);
      plateGrad.addColorStop(0, cLight);
      plateGrad.addColorStop(0.55, cMid);
      plateGrad.addColorStop(1, cDark);
      ctx.fillStyle = plateGrad;
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#4B3611';
      ctx.stroke();

      // Rinceaux baroques ciselés autour du plateau
      ctx.strokeStyle = '#3F2D0D';
      ctx.lineWidth = 2.2;
      for (let a = 0; a < 12; a++) {
        const ang = (a * Math.PI) / 6;
        const rx = 189 + Math.cos(ang) * 56;
        const ry = 264 + Math.sin(ang) * 76;
        ctx.beginPath();
        ctx.arc(rx, ry, 9, ang, ang + Math.PI * 1.25);
        ctx.stroke();
      }

      // Monogramme entrelacé en relief (C, G, V et pilier central) + éclat spéculaire
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#362509';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(188, 264, 42, 0.45, Math.PI * 1.65);
      ctx.moveTo(190, 198);
      ctx.lineTo(190, 332);
      ctx.moveTo(162, 238);
      ctx.lineTo(190, 314);
      ctx.lineTo(218, 238);
      ctx.stroke();

      ctx.strokeStyle = cLight;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.arc(186, 262, 42, 0.45, Math.PI * 1.65);
      ctx.moveTo(188, 196);
      ctx.lineTo(188, 330);
      ctx.moveTo(160, 236);
      ctx.lineTo(188, 312);
      ctx.lineTo(216, 236);
      ctx.stroke();
    } else if (type === 'luxury_umbrella') {
      // PHOTO 1 : Les 3 Parapluies de maître à manche acajou verni et bague dorée gravée
      drawContactShadow(280, 445, 190, 28, 0.16);

      const drawSingleUmbrella = (tx, ty, angleDeg, canopyHex, woodHex) => {
        ctx.save();
        ctx.translate(tx, ty);
        ctx.rotate((angleDeg * Math.PI) / 180);

        // Toile plissée haute densité
        const canGrad = ctx.createLinearGradient(-42, -230, 42, -25);
        canGrad.addColorStop(0, '#14171C');
        canGrad.addColorStop(0.5, canopyHex);
        canGrad.addColorStop(1, '#0F1115');
        ctx.fillStyle = canGrad;
        ctx.beginPath();
        ctx.moveTo(-34, -235);
        ctx.lineTo(34, -235);
        ctx.lineTo(44, -24);
        ctx.lineTo(-44, -24);
        ctx.closePath();
        ctx.fill();

        // Plis profonds réalistes
        [-24, -8, 8, 24].forEach((px) => {
          ctx.beginPath();
          ctx.moveTo(px * 0.65, -235);
          ctx.lineTo(px, -24);
          ctx.lineWidth = 3.2;
          ctx.strokeStyle = 'rgba(0,0,0,0.48)';
          ctx.stroke();
        });

        // Aiguillettes dorées des baleines (petits embouts d'or)
        [-38, -24, -10, 6, 20, 34].forEach((rx) => {
          ctx.fillStyle = '#E8CF8C';
          ctx.beginPath();
          ctx.roundRect(rx, -27, 5, 11, 2.5);
          ctx.fill();
        });

        // Bague métallique dorée ciselée avec cartouche ovale
        const ringGrad = ctx.createLinearGradient(-30 + shimmer * 0.3, -14, 30, 28);
        ringGrad.addColorStop(0, '#5A4318');
        ringGrad.addColorStop(0.3, '#FCF0CF');
        ringGrad.addColorStop(0.55, '#CFAF63');
        ringGrad.addColorStop(0.8, '#FFFDF7');
        ringGrad.addColorStop(1, '#4E3912');
        ctx.fillStyle = ringGrad;
        ctx.beginPath();
        ctx.roundRect(-29, -14, 58, 42, 4);
        ctx.fill();

        ctx.strokeStyle = '#3E2C0C';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.roundRect(-20, -5, 40, 24, 6);
        ctx.stroke();

        // Manche cylindrique en bois d'acajou poli miroir
        const woodGrad = ctx.createLinearGradient(-28, 28, 28, 210);
        woodGrad.addColorStop(0, '#180604');
        woodGrad.addColorStop(0.26, woodHex);
        woodGrad.addColorStop(0.46, '#9E5042');
        woodGrad.addColorStop(0.54, '#C47666');
        woodGrad.addColorStop(0.76, woodHex);
        woodGrad.addColorStop(1, '#140403');
        ctx.fillStyle = woodGrad;
        ctx.beginPath();
        ctx.roundRect(-27, 28, 54, 182, [2, 2, 20, 20]);
        ctx.fill();

        ctx.restore();
      };

      const mainCanopy = variant?.canopy || '#23272E';
      const mainWood = variant?.wood || '#4E1D16';
      // Composition fidèle à la photo : 3 parapluies croisés en studio
      drawSingleUmbrella(175, 225, 28, '#545B63', '#4E1D16');
      drawSingleUmbrella(390, 255, 32, '#243C54', '#522019');
      drawSingleUmbrella(268, 315, -148, mainCanopy, mainWood);
    } else if (type === 'utility_pouch') {
      // PHOTO 2 : Écrin utilitaire "nähe. UTILITY CASE" avec mousqueton noir mat + écouteurs
      drawContactShadow(275, 428, 175, 24, 0.15);

      const isCamel = variant?.id === 'v7-2';
      const isChoco = variant?.id === 'v7-3';
      const mainLeather = isCamel ? '#D69B66' : isChoco ? '#4A3327' : '#214230';
      const rimColor = isCamel ? '#D8C7B2' : isChoco ? '#332219' : '#183324';

      // Second écrin ouvert en arrière-plan supérieur (fidèle à la photo Nähe)
      ctx.save();
      ctx.translate(310, 155);
      ctx.rotate(0.24);
      ctx.fillStyle = '#23201E';
      ctx.beginPath();
      ctx.roundRect(-95, -32, 190, 92, 34);
      ctx.fill();
      // Pièces de monnaie à l'intérieur
      ctx.fillStyle = '#9D6543';
      ctx.beginPath();
      ctx.arc(-12, 8, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#A8AFB8';
      ctx.beginPath();
      ctx.arc(20, 20, 24, 0, Math.PI * 2);
      ctx.fill();
      // Coque supérieure camel entrouverte
      const topLidGrad = ctx.createLinearGradient(-95, -62, 95, 10);
      topLidGrad.addColorStop(0, '#ECC094');
      topLidGrad.addColorStop(0.5, '#D49A64');
      topLidGrad.addColorStop(1, '#A67242');
      ctx.fillStyle = topLidGrad;
      ctx.beginPath();
      ctx.roundRect(-98, -64, 196, 74, 34);
      ctx.fill();
      ctx.restore();

      // Mousqueton noir mat de l'écrin principal
      ctx.save();
      ctx.translate(392, 285);
      ctx.rotate(-0.42);
      ctx.strokeStyle = '#1C1C1E';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.roundRect(-10, -24, 96, 48, 24);
      ctx.stroke();
      ctx.strokeStyle = '#B8C0C8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(-10, 0, 12, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Écrin principal au premier plan avec bordure zip chevron et marquage "nähe."
      ctx.fillStyle = rimColor;
      ctx.beginPath();
      ctx.roundRect(108, 250, 268, 172, 48);
      ctx.fill();

      const pouchGrad = ctx.createLinearGradient(118 + shimmer * 0.4, 258, 360, 412);
      pouchGrad.addColorStop(0, isCamel ? '#F0C79E' : isChoco ? '#694B3C' : '#335E47');
      pouchGrad.addColorStop(0.45, mainLeather);
      pouchGrad.addColorStop(1, isCamel ? '#9E6B3B' : '#12261B');
      ctx.fillStyle = pouchGrad;
      ctx.beginPath();
      ctx.roundRect(122, 264, 240, 144, 40);
      ctx.fill();

      // Marquage en creux "nähe. UTILITY CASE"
      ctx.fillStyle = 'rgba(15, 18, 16, 0.72)';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('nähe.', 242, 344);
      ctx.font = '600 9px sans-serif';
      ctx.fillText('U T I L I T Y   C A S E', 242, 360);
    } else if (type === 'flat_cuff') {
      // PHOTO 3 : Jonc Ruban Poli Miroir (Or Rose / Or Crème / Acier)
      drawContactShadow(280, 418, 165, 22, 0.14);

      const baseTone = variant?.primary || '#DFB89F';
      const cuffGrad = ctx.createLinearGradient(95 + shimmer, 140, 455, 390);
      cuffGrad.addColorStop(0, '#FFF9F5');
      cuffGrad.addColorStop(0.24, baseTone);
      cuffGrad.addColorStop(0.48, '#FFFFFF');
      cuffGrad.addColorStop(0.72, baseTone);
      cuffGrad.addColorStop(1, '#7D5642');

      // Arche arrière du jonc
      ctx.beginPath();
      ctx.ellipse(280, 275, 165, 92, -0.18, Math.PI * 1.05, Math.PI * 1.95);
      ctx.lineWidth = 28;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#8C624C';
      ctx.stroke();

      // Ruban plat principal poli miroir au premier plan
      ctx.beginPath();
      ctx.ellipse(280, 275, 165, 92, -0.18, 0.05, Math.PI * 0.96);
      ctx.lineWidth = 36;
      ctx.lineCap = 'round';
      ctx.strokeStyle = cuffGrad;
      ctx.stroke();

      // Tranche inférieure biseautée
      ctx.beginPath();
      ctx.ellipse(280, 286, 165, 92, -0.18, 0.08, Math.PI * 0.93);
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = '#5E3E2E';
      ctx.stroke();
    } else if (type === 'double_ear_cuff') {
      // PHOTO 4 : Double Anneau d'Oreille en Argent Rhodié / Or Pâle poli miroir
      drawContactShadow(280, 420, 130, 20, 0.14);

      const isGold = variant?.id === 'v3-2';
      const chromeGrad = ctx.createLinearGradient(120 + shimmer, 120, 420, 380);
      chromeGrad.addColorStop(0, '#FFFFFF');
      chromeGrad.addColorStop(0.3, isGold ? '#F5E4B8' : '#DCE2EA');
      chromeGrad.addColorStop(0.55, isGold ? '#9E7B36' : '#5E6670');
      chromeGrad.addColorStop(0.8, '#FFFFFF');
      chromeGrad.addColorStop(1, isGold ? '#C8A656' : '#9AA2AE');

      // Tige de liaison arrière
      ctx.save();
      ctx.translate(338, 175);
      ctx.rotate(0.42);
      ctx.fillStyle = chromeGrad;
      ctx.beginPath();
      ctx.roundRect(-12, 0, 24, 155, 12);
      ctx.fill();
      ctx.restore();

      // Premier et second arceaux parallèles polis miroir
      [0, 1].forEach((idx) => {
        const ox = idx * 34;
        const oy = idx * 62;
        ctx.beginPath();
        ctx.ellipse(245 + ox, 225 + oy, 105, 58, -0.35, -0.4, Math.PI * 1.15);
        ctx.lineWidth = 28;
        ctx.lineCap = 'round';
        ctx.strokeStyle = chromeGrad;
        ctx.stroke();

        // Reflet spéculaire blanc pur sur le bombé
        ctx.beginPath();
        ctx.ellipse(245 + ox, 221 + oy, 102, 55, -0.35, 0.1, Math.PI * 0.85);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
      });
    } else if (type === 'wide_ear_cuff') {
      // PHOTO 6 : Manchette d'Oreille Sculptée (Hélix large bombé poli miroir)
      drawContactShadow(280, 420, 125, 20, 0.14);

      const isGold = variant?.id === 'v4-2';
      const domeGrad = ctx.createLinearGradient(145 + shimmer, 120, 410, 390);
      domeGrad.addColorStop(0, '#FFFFFF');
      domeGrad.addColorStop(0.32, isGold ? '#F6E6BC' : '#E2E7EE');
      domeGrad.addColorStop(0.62, isGold ? '#8C6C2B' : '#58606A');
      domeGrad.addColorStop(0.88, '#FFFFFF');
      domeGrad.addColorStop(1, isGold ? '#C9A85C' : '#949CA8');

      // Courbure arrière interne
      ctx.beginPath();
      ctx.arc(285, 255, 92, -1.2, 1.2);
      ctx.lineWidth = 54;
      ctx.lineCap = 'round';
      ctx.strokeStyle = isGold ? '#8A6B2D' : '#6C7480';
      ctx.stroke();

      // Dôme avant large poli miroir
      ctx.beginPath();
      ctx.arc(265, 255, 96, 1.15, Math.PI * 1.62);
      ctx.lineWidth = 68;
      ctx.lineCap = 'round';
      ctx.strokeStyle = domeGrad;
      ctx.stroke();

      // Éclat vertical miroir
      ctx.beginPath();
      ctx.arc(255, 255, 96, 2.35, 3.85);
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(255,255,255,0.92)';
      ctx.stroke();
    } else if (type === 'rfid_case') {
      // PHOTO 7 : Étui Cartes Blindé RFID (un boîtier vertical fermé + un boîtier ouvert en accordéon 10+ cartes)
      drawContactShadow(285, 435, 195, 26, 0.17);

      const shellTone = variant?.primary || '#8C624C';
      const shellDark = variant?.shell || '#4A3022';

      // 1. Boîtier vertical fermé à gauche (fidèle à la photo)
      const vertGrad = ctx.createLinearGradient(75, 115, 175, 395);
      vertGrad.addColorStop(0, '#C69E87');
      vertGrad.addColorStop(0.45, shellTone);
      vertGrad.addColorStop(1, shellDark);
      ctx.fillStyle = vertGrad;
      ctx.beginPath();
      ctx.roundRect(78, 118, 92, 272, 10);
      ctx.fill();
      ctx.strokeStyle = '#2B1B12';
      ctx.lineWidth = 2;
      ctx.stroke();
      // Fermoir latéral chromé
      ctx.fillStyle = '#E2E6EC';
      ctx.beginPath();
      ctx.roundRect(156, 224, 10, 56, 5);
      ctx.fill();

      // 2. Boîtier ouvert au premier plan avec accordéon éventail de cartes
      // Coque supérieure ouverte
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(195, 345);
      ctx.lineTo(245, 165);
      ctx.lineTo(468, 136);
      ctx.lineTo(422, 315);
      ctx.closePath();
      ctx.fillStyle = vertGrad;
      ctx.fill();
      ctx.stroke();

      // Éventail de 7 cartes et soufflets noirs en accordéon
      const fanCards = ['#DCE3EC', '#DFC48C', '#2B6296', '#1F242B', '#282C34', '#181A1F'];
      fanCards.forEach((col, i) => {
        const yOff = i * 22;
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.moveTo(235 - i * 4, 192 + yOff);
        ctx.lineTo(442 - i * 3, 166 + yOff);
        ctx.lineTo(434 - i * 3, 186 + yOff);
        ctx.lineTo(225 - i * 4, 212 + yOff);
        ctx.closePath();
        ctx.fill();
      });

      // Base inférieure ouverte avec fermoir métal
      ctx.beginPath();
      ctx.moveTo(195, 345);
      ctx.lineTo(422, 315);
      ctx.lineTo(485, 365);
      ctx.lineTo(258, 412);
      ctx.closePath();
      ctx.fillStyle = vertGrad;
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    } else if (type === 'pull_tab_wallet') {
      // PHOTO 10 : Porte-Cartes Cuir Cognac à Tirette (pastille cousue + 5 cartes en cascade + sangle noire)
      drawContactShadow(280, 435, 185, 26, 0.16);

      const leatherHex = variant?.primary || '#875339';
      const darkHex = variant?.secondary || '#4E2C1B';

      ctx.save();
      ctx.translate(285, 255);
      ctx.rotate(-0.52);

      // Sangle noire tissée et languette ronde cousue en bas
      ctx.fillStyle = '#181716';
      ctx.fillRect(-48, 95, 96, 85);

      const tabGrad = ctx.createLinearGradient(-52, 155, 52, 235);
      tabGrad.addColorStop(0, leatherHex);
      tabGrad.addColorStop(1, darkHex);
      ctx.fillStyle = tabGrad;
      ctx.beginPath();
      ctx.roundRect(-50, 155, 100, 82, 46);
      ctx.fill();
      ctx.strokeStyle = '#C99878';
      ctx.setLineDash([5, 4]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 196, 32, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Cascade étagée de 5 cartes sortant du bas
      const cascadeColors = ['#CBD3DC', '#E8ECF2', '#C83E3B', '#DCE4EC', '#8CB854'];
      cascadeColors.reverse().forEach((cHex, idx) => {
        const yPos = 18 + idx * 24;
        ctx.fillStyle = cHex;
        ctx.beginPath();
        ctx.roundRect(-78, yPos, 156, 68, 10);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.18)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Fourreau principal en cuir grainé avec pastille centrale cousue
      const sleeveGrad = ctx.createLinearGradient(-95 + shimmer * 0.4, -195, 95, 45);
      sleeveGrad.addColorStop(0, '#AC7254');
      sleeveGrad.addColorStop(0.5, leatherHex);
      sleeveGrad.addColorStop(1, darkHex);
      ctx.fillStyle = sleeveGrad;
      ctx.beginPath();
      ctx.roundRect(-92, -195, 184, 228, 22);
      ctx.fill();

      // Surpiqûre sellier périmétrique
      ctx.strokeStyle = '#C99878';
      ctx.setLineDash([6, 4]);
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.roundRect(-82, -185, 164, 208, 16);
      ctx.stroke();

      // Médaillon rond cousu au centre
      ctx.beginPath();
      ctx.arc(0, -52, 32, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
    } else if (type === 'compact_mirror') {
      // PHOTO 5 : Miroir de Poche rond chromé / taupe miroir gravé "Rose"
      drawContactShadow(280, 425, 155, 24, 0.16);

      const rimGrad = ctx.createLinearGradient(110, 110, 450, 450);
      rimGrad.addColorStop(0, '#FFFFFF');
      rimGrad.addColorStop(0.45, '#CED4DC');
      rimGrad.addColorStop(0.75, '#596068');
      rimGrad.addColorStop(1, '#F5F7FA');

      // Charnière supérieure et bouton-poussoir inférieur (exactement comme sur la photo)
      ctx.save();
      ctx.translate(280, 265);
      ctx.rotate(-0.26);

      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.roundRect(-42, -162, 84, 18, 4);
      ctx.fill();
      ctx.strokeStyle = '#596068';
      ctx.stroke();

      ctx.beginPath();
      ctx.roundRect(-16, 146, 32, 22, 5);
      ctx.fill();
      ctx.stroke();

      // Anneau chromé extérieur
      ctx.beginPath();
      ctx.arc(0, 0, 152, 0, Math.PI * 2);
      ctx.fillStyle = rimGrad;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#6D747D';
      ctx.stroke();

      // Dôme miroir taupe/rosé poli
      const mirrorGrad = ctx.createRadialGradient(-45 + shimmer * 0.5, -55, 12, 0, 0, 145);
      mirrorGrad.addColorStop(0, '#EAE0DA');
      mirrorGrad.addColorStop(0.38, variant?.face || '#9A867D');
      mirrorGrad.addColorStop(0.82, '#6E5B52');
      mirrorGrad.addColorStop(1, '#B8A8A0');
      ctx.beginPath();
      ctx.arc(0, 0, 138, 0, Math.PI * 2);
      ctx.fillStyle = mirrorGrad;
      ctx.fill();

      // Reflet de courbe lumineuse en bordure
      ctx.beginPath();
      ctx.arc(0, 0, 126, -2.4, -0.7);
      ctx.lineWidth = 7;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(255,255,255,0.75)';
      ctx.stroke();

      // Gravure calligraphique "Rose"
      ctx.font = 'italic 68px Georgia, "Times New Roman", serif';
      ctx.fillStyle = 'rgba(244, 236, 230, 0.88)';
      ctx.textAlign = 'center';
      ctx.fillText('Rose', 0, 22);

      ctx.restore();
    } else if (type === 'cashmere_shawl') {
      // PHOTO 8 : Étole Cachemire Ivoire aux Arbres de Vie Dorés & Bordure Lamée
      drawContactShadow(280, 438, 175, 22, 0.14);

      const fabricHex = variant?.primary || '#F4EDE1';

      // Pan arrière drapé
      ctx.fillStyle = '#E6DCCA';
      ctx.beginPath();
      ctx.roundRect(235, 88, 175, 325, 18);
      ctx.fill();

      // Pan principal drapé à l'avant
      const shawlGrad = ctx.createLinearGradient(125, 75, 325, 415);
      shawlGrad.addColorStop(0, '#FCF9F2');
      shawlGrad.addColorStop(0.5, fabricHex);
      shawlGrad.addColorStop(1, '#DFD2BC');
      ctx.fillStyle = shawlGrad;
      ctx.beginPath();
      ctx.roundRect(128, 78, 188, 332, 18);
      ctx.fill();

      // Large bordure tissée or champagne en bas des deux pans
      const goldBand = ctx.createLinearGradient(128, 345, 410, 405);
      goldBand.addColorStop(0, '#C5A664');
      goldBand.addColorStop(0.5, '#F6E6BC');
      goldBand.addColorStop(1, '#B0904E');
      ctx.fillStyle = goldBand;
      ctx.fillRect(128, 348, 188, 48);
      ctx.fillRect(235, 355, 175, 44);

      // Motifs Arbre de Vie dorés finement ramifiés (fidèles à la photo)
      const drawGoldenTree = (tx, ty, scale = 1) => {
        ctx.save();
        ctx.translate(tx, ty);
        ctx.scale(scale, scale);
        // Feuillage en pointillés d'or
        ctx.fillStyle = '#C9AC68';
        for (let i = 0; i < 36; i++) {
          const ang = (i * Math.PI * 2) / 36;
          const r = 18 + (i % 3) * 9;
          ctx.beginPath();
          ctx.arc(Math.cos(ang) * r, Math.sin(ang) * r - 12, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
        // Tronc et branches
        ctx.strokeStyle = '#B5944E';
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.moveTo(0, 26);
        ctx.lineTo(0, -14);
        ctx.moveTo(-12, 26);
        ctx.lineTo(12, 26);
        ctx.moveTo(0, -2);
        ctx.lineTo(-16, -18);
        ctx.moveTo(0, -6);
        ctx.lineTo(16, -20);
        ctx.stroke();
        ctx.restore();
      };

      drawGoldenTree(222, 175, 1.05);
      drawGoldenTree(218, 285, 1.1);
      drawGoldenTree(348, 225, 1.0);
    } else if (type === 'watch') {
      // Montre Charisme 36 mm
      drawContactShadow(280, 435, 125, 20, 0.14);
      const strapHex = variant?.strap || '#3B2820';
      const caseHex = variant?.caseColor || '#E5D3A7';

      ctx.fillStyle = strapHex;
      ctx.beginPath();
      ctx.roundRect(236, 72, 88, 365, 14);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(280, 255, 88, 0, Math.PI * 2);
      ctx.fillStyle = caseHex;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#8E7542';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(280, 255, 74, 0, Math.PI * 2);
      ctx.fillStyle = '#FCF9F2';
      ctx.fill();

      ctx.strokeStyle = '#231915';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(280, 255);
      ctx.lineTo(280, 202);
      ctx.moveTo(280, 255);
      ctx.lineTo(322, 255);
      ctx.stroke();
    } else {
      // Monture Solaire Architecte
      drawContactShadow(280, 415, 175, 20, 0.14);
      const frameHex = variant?.lens || '#3D2B22';
      ctx.fillStyle = frameHex;
      ctx.strokeStyle = '#1E1612';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.roundRect(96, 205, 152, 108, 32);
      ctx.roundRect(312, 205, 152, 108, 32);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = '#D8C292';
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(248, 242);
      ctx.quadraticCurveTo(280, 224, 312, 242);
      ctx.stroke();
    }

    ctx.restore();
  }, [type, variant, lightAngle]);

  return (
    <canvas
      ref={canvasRef}
      width={560}
      height={560}
      className="w-full h-full object-contain rounded-2xl bg-white"
    />
  );
}

// ============================================================================
// 8. DONNÉES DES 12 PIÈCES (VITRINE + DESCRIPTIFS + COLLECTION PHOTO HD)
// ============================================================================
const PRODUCTS = Object.freeze([
  {
    id: 1,
    sculptureType: 'signet_ring',
    referenceCode: 'REF-01',
    name: 'Chevalière Octogonale Gravée',
    price: 115,
    category: 'Bijouterie',
    surfaceTone: 'greige',
    essenceTag: 'Plateau 8 Pans',
    shortNote: 'Monogramme ciselé',
    description: 'Anneau octogonal facetté à épaulement poli et plateau gravé de rinceaux héraldiques.',
    editorialEssay:
      'Inspirée des bagues-sceaux d’archives, cette chevalière octogonale associe huit pans biseautés polis miroir à une table centrale finement gravée. L’équilibre de son anneau fuselé permet un tombé naturel sur l’auriculaire ou l’annulaire.',
    specs: {
      dimensions: 'Plateau 12 × 10 mm · Tailles 50 à 64',
      materials: 'Alliage précieux brossé & Gravure profonde',
      origin: 'Atelier Joaillier Paris',
      warranty: 'Garantie à vie'
    },
    variants: [
      { id: 'v1-1', name: 'Or Pâle', color: '#E8DCB9', primary: '#DFC68C', face: '#F7E9C4', band: '#A6894B' },
      { id: 'v1-2', name: 'Argent Poli', color: '#CFD4DA', primary: '#CFD4DA', face: '#E6E9EE', band: '#8E96A0' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="signet_ring" variant={variant} />
  },
  {
    id: 2,
    sculptureType: 'flat_cuff',
    referenceCode: 'REF-02',
    name: 'Jonc Ruban Poli',
    price: 75,
    category: 'Bijouterie',
    surfaceTone: 'grey',
    essenceTag: 'Ruban 5 mm',
    shortNote: 'Poli miroir',
    description: 'Bracelet jonc rigide à profil plat, conçu pour épouser le poignet avec un éclat satiné.',
    editorialEssay:
      'Un trait pur autour du poignet. Ce jonc ruban de 5 millimètres capte la lumière sur une surface plane sans aspérité, tandis que ses bords intérieurs adoucis assurent un confort continu du matin au soir.',
    specs: {
      dimensions: 'Largeur 5 mm · Ouverture ergonomique',
      materials: 'Acier chirurgical 316L finition miroir',
      origin: 'Façonné à Lyon',
      warranty: 'Garantie 3 ans'
    },
    variants: [
      { id: 'v2-1', name: 'Or Rose Pâle', color: '#E4C7B2', primary: '#DFB89F' },
      { id: 'v2-2', name: 'Or Crème', color: '#E8DCB9', primary: '#E2CE9E' },
      { id: 'v2-3', name: 'Acier Blanc', color: '#CFD4DA', primary: '#D0D6DE' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="flat_cuff" variant={variant} />
  },
  {
    id: 3,
    sculptureType: 'double_ear_cuff',
    referenceCode: 'REF-03',
    name: 'Double Anneau d’Oreille',
    price: 48,
    category: 'Bijouterie',
    surfaceTone: 'greige',
    essenceTag: 'Sans perçage',
    shortNote: 'Double jonc articulé',
    description: 'Bague de pavillon à double arceau poli qui se glisse sur le cartilage sans nécessiter de perçage.',
    editorialEssay:
      'Pensé pour habiller l’oreille sans perçage, ce double anneau relie deux joncs parallèles par une tige discrète à l’arrière du cartilage. Il offre l’illusion visuelle de deux anneaux distincts avec une tenue stable.',
    specs: {
      dimensions: 'Diamètre interne 10 mm · Hauteur 8 mm',
      materials: 'Argent 925 rhodié hypoallergénique',
      origin: 'Atelier Paris',
      warranty: 'Garantie 3 ans'
    },
    variants: [
      { id: 'v3-1', name: 'Argent Rhodié', color: '#DEE2E7', primary: '#DCE1E7' },
      { id: 'v3-2', name: 'Or Pâle', color: '#E8DCB9', primary: '#E5D3A7' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="double_ear_cuff" variant={variant} />
  },
  {
    id: 4,
    sculptureType: 'wide_ear_cuff',
    referenceCode: 'REF-04',
    name: 'Manchette d’Oreille Sculptée',
    price: 52,
    category: 'Bijouterie',
    surfaceTone: 'grey',
    essenceTag: 'Hélix Large',
    shortNote: 'Ruban bombé sans perçage',
    description: 'Manchette d’oreille minimaliste à surface galbée, offrant une tenue douce et stable sur l’hélix.',
    editorialEssay:
      'Une architecture miniature pour le haut de l’oreille. Son profil légèrement bombé réfléchit la lumière avec douceur et se positionne d’un simple geste sur l’hélix.',
    specs: {
      dimensions: 'Largeur 7 mm · Ajustement souple',
      materials: 'Argent massif poli miroir',
      origin: 'Atelier Milan',
      warranty: 'Garantie 3 ans'
    },
    variants: [
      { id: 'v4-1', name: 'Argent Miroir', color: '#DEE2E7', primary: '#E2E6EC' },
      { id: 'v4-2', name: 'Or Crème', color: '#E8DCB9', primary: '#E4D2A5' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="wide_ear_cuff" variant={variant} />
  },
  {
    id: 5,
    sculptureType: 'rfid_case',
    referenceCode: 'REF-05',
    name: 'Étui Cartes Blindé RFID',
    price: 68,
    category: 'Maroquinerie',
    surfaceTone: 'greige',
    essenceTag: '10+ Cartes · RFID',
    shortNote: 'Ouverture éventail',
    description: 'Boîtier rigide en aluminium anodisé doté d’un blindage anti-onde RFID et d’un déploiement en accordéon.',
    editorialEssay:
      'Conçu pour protéger vos cartes bancaires des lectures sans contact non désirées, cet étui rigide s’ouvre d’une pression du pouce et déploie plus de dix compartiments en éventail.',
    specs: {
      dimensions: '96 × 66 × 13 mm · Poids plume 62 g',
      materials: 'Alliage anodisé brossé & Soufflets indéchirables',
      origin: 'Conception Genève',
      warranty: 'Garantie 5 ans'
    },
    variants: [
      { id: 'v5-1', name: 'Bronze Chocolat', color: '#8D6650', primary: '#8C624C', shell: '#4D3326' },
      { id: 'v5-2', name: 'Acier Satiné', color: '#CFD4DA', primary: '#BFC6CF', shell: '#6E757E' },
      { id: 'v5-3', name: 'Noir Mat', color: '#262422', primary: '#3A3632', shell: '#151515' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="rfid_case" variant={variant} />
  },
  {
    id: 6,
    sculptureType: 'pull_tab_wallet',
    referenceCode: 'REF-06',
    name: 'Porte-Cartes Cuir à Tirette',
    price: 78,
    category: 'Maroquinerie',
    surfaceTone: 'grey',
    essenceTag: 'Extraction Étagée',
    shortNote: 'Cuir sellier grainé',
    description: 'Fourreau vertical en cuir pleine fleur doté d’un mécanisme d’extraction en cascade par tirette.',
    editorialEssay:
      'Façonné dans un cuir de veau au grain naturel qui se patine au fil des années, ce porte-cartes réunit l’épure de la maroquinerie traditionnelle et l’ingéniosité d’une sangle d’extraction étagée.',
    specs: {
      dimensions: '104 × 72 mm · Capacité 6 à 8 cartes',
      materials: 'Cuir de veau grainé & Sangle tissée haute densité',
      origin: 'Tannerie Florence',
      warranty: 'Garantie 5 ans'
    },
    variants: [
      { id: 'v6-1', name: 'Cognac Sellier', color: '#7A4B32', primary: '#875339', secondary: '#563220' },
      { id: 'v6-2', name: 'Chocolat Noir', color: '#4A3429', primary: '#4E3427', secondary: '#2E1F18' },
      { id: 'v6-3', name: 'Bois Sablé', color: '#B89E82', primary: '#B89E82', secondary: '#8F765B' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="pull_tab_wallet" variant={variant} />
  },
  {
    id: 7,
    sculptureType: 'utility_pouch',
    referenceCode: 'REF-07',
    name: 'Mini-Écrin Nomade à Mousqueton',
    price: 42,
    category: 'Maroquinerie',
    surfaceTone: 'greige',
    essenceTag: 'Écouteurs & Monnaie',
    shortNote: 'Coque gainée à mousqueton',
    description: 'Écrin compact zippé doublé de suédine douce pour protéger vos écouteurs sans fil, clés ou monnaie.',
    editorialEssay:
      'Inspiré des étuis utilitaires japonais, ce mini-écrin gainé s’accroche instantanément à un passant ou à l’intérieur d’un sac grâce à son mousqueton noir mat.',
    specs: {
      dimensions: '85 × 55 × 32 mm · Mousqueton acier noir mat',
      materials: 'Cuir lisse imperméable & Zip chevron',
      origin: 'Atelier Kyoto',
      warranty: 'Garantie 3 ans'
    },
    variants: [
      { id: 'v7-1', name: 'Vert Forêt', color: '#244432', primary: '#244432', zipTape: '#1C3627' },
      { id: 'v7-2', name: 'Camel Doux', color: '#D49B6A', primary: '#D49B6A', zipTape: '#C7B69E' },
      { id: 'v7-3', name: 'Chocolat', color: '#4A3429', primary: '#4A3429', zipTape: '#36241B' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="utility_pouch" variant={variant} />
  },
  {
    id: 8,
    sculptureType: 'luxury_umbrella',
    referenceCode: 'REF-08',
    name: 'Parapluie Manche Bois Noble',
    price: 125,
    category: 'Quotidien',
    surfaceTone: 'grey',
    essenceTag: '8 Baleines Vent',
    shortNote: 'Poignée bois tourné & bague dorée',
    description: 'Parapluie de maître à ouverture feutrée, poignée en bois massif poli et bague d’assemblage ciselée.',
    editorialEssay:
      'Une pièce d’artisanat pensée pour traverser les averses avec allure. Sa poignée en bois d’acajou tourné et verni à la main est couronnée d’une bague dorée gravée.',
    specs: {
      dimensions: 'Envergure 108 cm · Fermé 33 cm',
      materials: 'Bois d’acajou poli, Toile déperlante & Bague alliage doré',
      origin: 'Manufacture Aurillac',
      warranty: 'Garantie 5 ans'
    },
    variants: [
      { id: 'v8-1', name: 'Noir Ebène', color: '#26292E', canopy: '#26292E', wood: '#4A201A' },
      { id: 'v8-2', name: 'Gris Ardoise', color: '#6E737B', canopy: '#6E737B', wood: '#4A201A' },
      { id: 'v8-3', name: 'Bleu Nuit', color: '#2F4256', canopy: '#2F4256', wood: '#5A2A20' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="luxury_umbrella" variant={variant} />
  },
  {
    id: 9,
    sculptureType: 'compact_mirror',
    referenceCode: 'REF-09',
    name: 'Miroir de Poche Gravé',
    price: 55,
    category: 'Quotidien',
    surfaceTone: 'greige',
    essenceTag: 'Double Miroir',
    shortNote: 'Coque ronde polie & gravure',
    description: 'Miroir de sac extra-plat à ouverture par bouton-poussoir, réunissant un miroir standard et un miroir grossissant.',
    editorialEssay:
      'Fin comme un galet d’argent poli, ce miroir de poche s’ouvre d’une simple pression sur son fermoir mécanique et dévoile deux miroirs haute clarté.',
    specs: {
      dimensions: 'Diamètre 70 mm · Épaisseur 8 mm',
      materials: 'Acier chromé poli miroir & Verre haute clarté',
      origin: 'Atelier Paris',
      warranty: 'Garantie 3 ans'
    },
    variants: [
      { id: 'v9-1', name: 'Argent & Taupe', color: '#9E8D84', face: '#9E8D84' },
      { id: 'v9-2', name: 'Or Pâle', color: '#D8C7A8', face: '#C9B592' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="compact_mirror" variant={variant} />
  },
  {
    id: 10,
    sculptureType: 'cashmere_shawl',
    referenceCode: 'REF-10',
    name: 'Étole Cachemire Motifs Dorés',
    price: 135,
    category: 'Quotidien',
    surfaceTone: 'grey',
    essenceTag: 'Tissage Fin',
    shortNote: 'Arbres dorés & bordure lamée',
    description: 'Grande étole enveloppante au tombé souple, rehaussée d’arbres délicatement dorés et d’une bordure tissée.',
    editorialEssay:
      'Tissée dans un mélange aérien de laine vierge et de cachemire crème, cette étole lumineuse est ponctuée d’arbres de vie dorés et soulignée d’une large bordure lamée.',
    specs: {
      dimensions: '190 × 70 cm · Franges souples 2 cm',
      materials: 'Laine vierge, Cachemire & Fil métallisé doux',
      origin: 'Atelier Côme',
      warranty: 'Soin pressing'
    },
    variants: [
      { id: 'v10-1', name: 'Ivoire & Or Pâle', color: '#F3ECE0', primary: '#F3ECE0' },
      { id: 'v10-2', name: 'Sable & Or Doux', color: '#E6DEC8', primary: '#E6DEC8' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="cashmere_shawl" variant={variant} />
  },
  {
    id: 11,
    sculptureType: 'watch',
    referenceCode: 'REF-11',
    name: 'Montre Charisme 36 mm',
    price: 145,
    category: 'Quotidien',
    surfaceTone: 'greige',
    essenceTag: 'Calibre 6.8 mm',
    shortNote: 'Cadran épuré & verre saphir',
    description: 'Garde-temps extra-plat pensé pour accompagner chaque pièce de la collection avec justesse.',
    editorialEssay:
      'Avec son boîtier de 6,8 millimètres d’épaisseur et son cadran dépourvu de tout superflu, la Montre Charisme se glisse sous toutes les manches avec une présence silencieuse.',
    specs: {
      dimensions: 'Boîtier 36 mm · Épaisseur 6.8 mm',
      materials: 'Acier brossé, Verre saphir & Bracelet cuir sellier',
      origin: 'Assemblé à Besançon',
      warranty: 'Garantie 5 ans'
    },
    variants: [
      { id: 'v11-1', name: 'Or Pâle & Brun', color: '#E5D3A7', strap: '#3B2820', caseColor: '#E5D3A7' },
      { id: 'v11-2', name: 'Acier & Noir', color: '#CFD4DA', strap: '#22201F', caseColor: '#CFD4DA' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="watch" variant={variant} />
  },
  {
    id: 12,
    sculptureType: 'eyewear',
    referenceCode: 'REF-12',
    name: 'Monture Solaire Architecte',
    price: 110,
    category: 'Quotidien',
    surfaceTone: 'grey',
    essenceTag: 'Verres UV400',
    shortNote: 'Acétate poli & pont doré',
    description: 'Monture équilibrée associant face en acétate façonné main et charnières renforcées à 5 charnons.',
    editorialEssay:
      'Dessinée selon les proportions classiques de l’architecture moderniste, cette monture associe l’acétate poli à la main et un pont métallique en or pâle.',
    specs: {
      dimensions: 'Verres 49 mm · Pont 21 mm · Branches 145 mm',
      materials: 'Acétate Mazzucchelli & Verres minéraux',
      origin: 'Manufacture Oyonnax',
      warranty: 'Garantie 3 ans'
    },
    variants: [
      { id: 'v12-1', name: 'Écaille Chocolat', color: '#3D2B22', lens: '#3D2B22' },
      { id: 'v12-2', name: 'Noir Profond', color: '#1E1D1C', lens: '#1E1D1C' }
    ],
    render3DLayers: (variant) => <StudioCutoutProduct type="eyewear" variant={variant} />
  }
]);

const DELIVERY_STEPS = ['En préparation', 'En transit', 'Livré'];

const CATALOG_RIBBON_ITEMS = [
  { id: 'Toutes', label: 'La Vitrine', subtitle: 'Modèles vectoriels' },
  { id: 'Bijouterie', label: 'Bijouterie', subtitle: 'Bagues, joncs & oreilles' },
  { id: 'Maroquinerie', label: 'Maroquinerie', subtitle: 'Étuis & porte-cartes' },
  { id: 'Quotidien', label: 'Quotidien', subtitle: 'Parapluie, miroir & étole' },
  { id: 'CollectionHD', label: 'Présentation de la Collection', subtitle: 'Photos HD · Caméra 2D & 3D' }
];

const maskPersonalData = (fullName = '', email = '', cityPostal = '') => {
  const cleanName = SovereignSecurityCore.sanitizeText(fullName, 60) || 'Client Invité';
  const parts = cleanName.split(' ');
  const firstName = parts[0];
  const lastInitial = parts.length > 1 ? `${parts[parts.length - 1][0].toUpperCase()}*****` : '*****';
  const maskedName = `${firstName} ${lastInitial}`;

  const cleanEmail = SovereignSecurityCore.sanitizeEmail(email) || 'invite@reference.fr';
  const [userPart, domainPart] = cleanEmail.split('@');
  const maskedEmail =
    userPart && domainPart
      ? `${userPart[0]}***@${domainPart}`
      : 'c***@reference.fr';

  const cleanCity = SovereignSecurityCore.sanitizeText(cityPostal, 30);
  const maskedLocation = cleanCity
    ? `${cleanCity.slice(0, 5)}••• (Protégé)`
    : 'Protégé (RGPD)';

  return { maskedName, maskedEmail, maskedLocation };
};

const INITIAL_ORDERS = [
  {
    id: 'TR-2026-1042',
    integrityHash: 'TR-SOV-8F2A-991C',
    date: '2026-11-02',
    customer: 'Jean D*****',
    maskedEmail: 'j***@dupont.fr',
    maskedLocation: '75003••• (Protégé)',
    isGuest: true,
    itemsSummary: 'Parapluie Manche Bois Noble (Noir Ebène) ×1',
    deliveryMethod: 'Standard Offert',
    paymentMethodLabel: 'Carte Bancaire',
    amount: 125,
    paymentStatus: 'Payé',
    deliveryStatus: 'Livré'
  },
  {
    id: 'TR-2026-1089',
    integrityHash: 'TR-SOV-4C1D-720E',
    date: '2026-11-03',
    customer: 'Alice M*****',
    maskedEmail: 'a***@martin.fr',
    maskedLocation: '69002••• (Protégé)',
    isGuest: true,
    itemsSummary: 'Chevalière Octogonale Gravée (Or Pâle) ×1',
    deliveryMethod: 'Express Écrin',
    paymentMethodLabel: 'Apple Pay',
    amount: 115,
    paymentStatus: 'Payé',
    deliveryStatus: 'En transit'
  }
];

const CART_STORAGE_KEY = 'ta_reference_guest_cart_v5';

const getInitialVariants = () => {
  const map = {};
  PRODUCTS.forEach((product) => {
    map[product.id] = product.variants[0];
  });
  return map;
};

const loadPersistedCart = () => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return [];
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(SovereignSecurityCore.validateCartItemSchema)
      .map((savedItem) => {
        const productRef = PRODUCTS.find((p) => p.id === savedItem.productId);
        if (!productRef) return null;
        const variantRef =
          productRef.variants.find((v) => v.id === savedItem.variantId) ||
          productRef.variants[0];
        return {
          ...productRef,
          selectedVariant: variantRef,
          quantity: Math.min(20, Math.max(1, Number(savedItem.quantity) || 1)),
          cartId: `${productRef.id}-${variantRef.id}`
        };
      })
      .filter(Boolean);
  } catch (e) {
    return [];
  }
};

// ============================================================================
// 9. COMPOSANT RACINE PROTÉGÉ
// ============================================================================
export default function App() {
  return (
    <SafeGuardBoundary>
      <TaReferenceApp />
    </SafeGuardBoundary>
  );
}

function TaReferenceApp() {
  // Navigation : 'shop' (La Vitrine) | 'collection' (Présentation de la Collection) | 'descriptifs' | 'requete' | 'admin'
  const [view, setView] = useState('shop');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [activeDescriptifProductId, setActiveDescriptifProductId] = useState(PRODUCTS[0].id);
  const [activeCollectionProductId, setActiveCollectionProductId] = useState(PRODUCTS[0].id);

  // Cloisonnement des privilèges : 'ACTIVE_VISITOR' (accès partiel) vs 'GENERAL_ADMIN' (maîtrise totale)
  const [userRole, setUserRole] = useState('ACTIVE_VISITOR');
  const [blockedThreatsCount, setBlockedThreatsCount] = useState(0);
  const [securityLog, setSecurityLog] = useState([
    {
      id: 'SEC-01',
      time: 'Actif',
      event: 'Cloisonnement actif : Visiteurs limités au périmètre de consultation. Maîtrise totale réservée à l’Administrateur Général.'
    }
  ]);

  const [cart, setCart] = useState(loadPersistedCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState(INITIAL_ORDERS);

  const [selectedVariants, setSelectedVariants] = useState(getInitialVariants);

  const [checkoutModalState, setCheckoutModalState] = useState({
    isOpen: false,
    items: [],
    source: 'cart'
  });

  const [toast, setToast] = useState(null);

  const recordBlockedThreat = useCallback((reason) => {
    setBlockedThreatsCount((prev) => prev + 1);
    setSecurityLog((prev) => [
      {
        id: `SEC-${Date.now().toString(36).toUpperCase().slice(-4)}`,
        time: new Date().toLocaleTimeString(),
        event: `Intention malveillante bloquée : ${reason}`
      },
      ...prev.slice(0, 14)
    ]);
    setToast({
      title: 'Bouclier Souverain Actif',
      subtitle: 'Action non autorisée ou suspecte bloquée immédiatement.'
    });
  }, []);

  useEffect(() => {
    try {
      const serializable = cart.map((item) => ({
        productId: item.id,
        variantId: item.selectedVariant?.id,
        quantity: item.quantity || 1,
        cartId: item.cartId
      }));
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(serializable));
    } catch (e) {
      // Stockage isolé
    }
  }, [cart]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (checkoutModalState.isOpen) {
          setCheckoutModalState((prev) => ({ ...prev, isOpen: false }));
        } else if (isCartOpen) {
          setIsCartOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [checkoutModalState.isOpen, isCartOpen]);

  const openDescriptifForProduct = useCallback((productId) => {
    setActiveDescriptifProductId(productId);
    setView('descriptifs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openCollectionForProduct = useCallback((productId) => {
    setActiveCollectionProductId(productId);
    setView('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const addToCart = useCallback(
    (product, customVariant, openDrawer = true) => {
      if (!product) return;
      const variant = customVariant || selectedVariants[product.id] || product.variants[0];
      const compositeCartId = `${product.id}-${variant.id}`;

      setCart((prev) => {
        const existingIndex = prev.findIndex((item) => item.cartId === compositeCartId);
        if (existingIndex > -1) {
          const updated = [...prev];
          const nextQty = Math.min(20, (updated[existingIndex].quantity || 1) + 1);
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: nextQty
          };
          return updated;
        }
        return [
          ...prev,
          {
            ...product,
            selectedVariant: variant,
            quantity: 1,
            cartId: compositeCartId
          }
        ];
      });

      if (openDrawer) {
        setIsCartOpen(true);
      } else {
        setToast({
          title: 'Ajouté à votre sélection',
          subtitle: `${product.name} · ${variant.name}`
        });
      }
    },
    [selectedVariants]
  );

  const updateCartQuantity = (cartId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId !== cartId) return item;
          const nextQty = Math.min(20, (item.quantity || 1) + delta);
          return nextQty > 0 ? { ...item, quantity: nextQty } : null;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const openCheckoutConfirmation = (directProduct = null, directVariant = null) => {
    if (directProduct) {
      const variant = directVariant || selectedVariants[directProduct.id] || directProduct.variants[0];
      setIsCartOpen(false);
      setCheckoutModalState({
        isOpen: true,
        items: [
          {
            ...directProduct,
            selectedVariant: variant,
            quantity: 1,
            cartId: `direct-${directProduct.id}-${variant.id}`
          }
        ],
        source: 'direct'
      });
    } else {
      if (cart.length === 0) return;
      setIsCartOpen(false);
      setCheckoutModalState({
        isOpen: true,
        items: [...cart],
        source: 'cart'
      });
    }
  };

  const createOrderRecord = ({
    fullName,
    email,
    phone,
    address,
    cityPostal,
    deliveryMethod,
    paymentMethodLabel
  }) => {
    if (
      SovereignSecurityCore.detectMaliciousIntent(fullName) ||
      SovereignSecurityCore.detectMaliciousIntent(address) ||
      SovereignSecurityCore.detectMaliciousIntent(cityPostal)
    ) {
      recordBlockedThreat('Tentative d’injection dans le formulaire de commande');
      return null;
    }

    const itemsToOrder = checkoutModalState.items;
    if (!itemsToOrder || itemsToOrder.length === 0) return null;

    const cleanFullName = SovereignSecurityCore.sanitizeText(fullName, 70);
    const cleanEmail = SovereignSecurityCore.sanitizeEmail(email);
    const cleanPhone = SovereignSecurityCore.sanitizePhone(phone);
    const cleanAddress = SovereignSecurityCore.sanitizeText(address, 110);
    const cleanCityPostal = SovereignSecurityCore.sanitizeText(cityPostal, 50);

    const totalAmount = itemsToOrder.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const orderId = `TR-2026-${randomDigits}`;

    const summary = itemsToOrder
      .map(
        (item) =>
          `${item.name} (${item.selectedVariant?.name || 'Standard'}) ×${item.quantity || 1}`
      )
      .join(', ');

    const { maskedName, maskedEmail, maskedLocation } = maskPersonalData(
      cleanFullName,
      cleanEmail,
      cleanCityPostal
    );

    const newOrder = {
      id: orderId,
      integrityHash: SovereignSecurityCore.generateIntegrityToken(),
      date: new Date().toISOString().split('T')[0],
      customer: maskedName,
      maskedEmail,
      maskedLocation,
      isGuest: true,
      itemsSummary: summary,
      deliveryMethod: SovereignSecurityCore.sanitizeText(deliveryMethod, 40) || 'Standard Offert',
      paymentMethodLabel: SovereignSecurityCore.sanitizeText(paymentMethodLabel, 50) || 'Carte Bancaire',
      amount: totalAmount,
      paymentStatus: 'Payé',
      deliveryStatus: 'En préparation',
      clientConfirmationSnapshot: {
        fullName: cleanFullName,
        email: cleanEmail,
        phone: cleanPhone,
        address: cleanAddress,
        cityPostal: cleanCityPostal
      }
    };

    setOrders((prev) => [newOrder, ...prev]);
    if (checkoutModalState.source === 'cart') {
      setCart([]);
    }
    return newOrder;
  };

  const cycleOrderDeliveryStatus = (orderId) => {
    if (userRole !== 'GENERAL_ADMIN') {
      recordBlockedThreat('Modification de statut refusée à un utilisateur non-administrateur');
      return;
    }
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== orderId) return order;
        const currentIndex = DELIVERY_STEPS.indexOf(order.deliveryStatus);
        const nextIndex = (currentIndex + 1) % DELIVERY_STEPS.length;
        return {
          ...order,
          deliveryStatus: DELIVERY_STEPS[nextIndex]
        };
      })
    );
  };

  return (
    <div
      className="min-h-screen font-sans flex flex-col justify-between relative overflow-x-hidden supple-silk-canvas selection:bg-[#231915] selection:text-[#F6F3EE]"
      style={{ backgroundColor: THEME.silkCanvas, color: THEME.espressoText }}
    >
      <style>{`
        .supple-silk-canvas {
          background-color: #F6F3EE;
          background-image:
            radial-gradient(at 15% 10%, rgba(230, 216, 184, 0.36) 0px, transparent 58%),
            radial-gradient(at 88% 35%, rgba(226, 213, 195, 0.42) 0px, transparent 62%),
            linear-gradient(180deg, #F8F5F0 0%, #EFE8DD 52%, #F6F3EE 100%);
        }

        .storefront-ribbon {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(245, 238, 224, 0.94) 100%);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(35, 25, 21, 0.09);
          box-shadow: 0 18px 40px -24px rgba(35, 25, 21, 0.14);
        }

        .white-studio-pedestal {
          background-color: #FFFFFF;
          border: 1px solid rgba(35, 25, 21, 0.07);
          box-shadow: 0 14px 34px -20px rgba(35, 25, 21, 0.08);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
        }
        .white-studio-pedestal:hover {
          transform: translateY(-4px);
          border-color: rgba(35, 25, 21, 0.18);
          box-shadow: 0 24px 48px -20px rgba(35, 25, 21, 0.14);
        }

        .studio-cutout-img {
          filter: contrast(1.03) saturate(1.02);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease;
        }
        .white-studio-pedestal:hover .studio-cutout-img {
          transform: scale(1.06);
          filter: contrast(1.06) saturate(1.05);
        }

        @keyframes cameraScan2D {
          0%, 100% { transform: translate(-6px, -4px) scale(1); }
          50% { transform: translate(6px, 4px) scale(1.03); }
        }
        .camera-2d-active {
          animation: cameraScan2D 5.5s ease-in-out infinite;
        }

        @keyframes fadeUpSoft {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-soft-fade {
          animation: fadeUpSoft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Notification discrète */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-xs animate-soft-fade">
          <div className="bg-white/95 backdrop-blur-md border border-[#231915]/12 px-4 py-3.5 rounded-2xl shadow-lg flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#231915] text-[#F6F3EE] flex items-center justify-center">
                <Check size={12} />
              </span>
              <div>
                <p className="text-xs font-medium text-[#231915]">{toast.title}</p>
                <p className="text-[11px] text-[#6E5D53]">{toast.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="p-1 text-[#6E5D53] hover:text-[#231915]"
              aria-label="Fermer"
            >
              <X size={13} />
            </button>
          </div>
        </div>
      )}

      {/* BANDEAU DE SOUVERAINETÉ & SÉCURITÉ */}
      <div className="w-full bg-[#171514] text-[#F6F3EE] px-4 py-1.5 text-[10px] tracking-wider">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={12} style={{ color: '#E6D8B8' }} />
            <span>
              INTÉGRITÉ INVIOLABLE · Statut actuel :{' '}
              <strong className="text-[#E6D8B8]">
                {userRole === 'GENERAL_ADMIN'
                  ? 'Administrateur Général (Possession & Maîtrise Totale)'
                  : 'Utilisateur Actif (Périmètre Partiel Cloisonné)'}
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Menaces neutralisées : {blockedThreatsCount}</span>
            <button
              type="button"
              onClick={() => setView('admin')}
              className="underline text-[#E6D8B8] hover:text-white"
            >
              {userRole === 'GENERAL_ADMIN' ? 'Poste Souverain' : 'Accès Administrateur Général'}
            </button>
          </div>
        </div>
      </div>

      {/* EN-TÊTE AVEC LE GRAND « T » GOTHIQUE & TRIBAL (Sans sous-titre Maison d'objets) */}
      <header className="w-full max-w-6xl mx-auto px-5 sm:px-8 pt-6 pb-5 flex flex-wrap items-center justify-between gap-4">
        <GothicTribalBrandMark
          onClick={() => {
            setView('shop');
            setSelectedCategory('Toutes');
          }}
        />

        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase text-[#6E5D53]">
          <button
            type="button"
            onClick={() => setView('shop')}
            className={`py-1 transition-colors ${
              view === 'shop'
                ? 'text-[#231915] font-semibold border-b border-[#231915]'
                : 'hover:text-[#231915]'
            }`}
          >
            La Vitrine
          </button>
          <button
            type="button"
            onClick={() => setView('descriptifs')}
            className={`py-1 flex items-center gap-1.5 transition-colors ${
              view === 'descriptifs'
                ? 'text-[#231915] font-semibold border-b border-[#231915]'
                : 'hover:text-[#231915]'
            }`}
          >
            <FileTextIcon size={13} />
            <span>Descriptifs</span>
          </button>
          <button
            type="button"
            onClick={() => setView('collection')}
            className={`py-1 flex items-center gap-1.5 transition-colors ${
              view === 'collection'
                ? 'text-[#231915] font-semibold border-b border-[#231915]'
                : 'hover:text-[#231915]'
            }`}
          >
            <CameraIcon size={13} />
            <span>Présentation de la Collection</span>
          </button>
          <button
            type="button"
            onClick={() => setView('requete')}
            className={`py-1 transition-colors ${
              view === 'requete'
                ? 'text-[#231915] font-semibold border-b border-[#231915]'
                : 'hover:text-[#231915]'
            }`}
          >
            Requêtes
          </button>
          <button
            type="button"
            onClick={() => setView('admin')}
            className={`py-1 transition-colors ${
              view === 'admin'
                ? 'text-[#231915] font-semibold border-b border-[#231915]'
                : 'hover:text-[#231915]'
            }`}
          >
            Souveraineté ({orders.length})
          </button>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setView(view === 'collection' ? 'shop' : 'collection')}
            className="lg:hidden px-3 py-1.5 rounded-full text-[11px] border border-[#231915]/15 bg-white/80 text-[#231915]"
          >
            {view === 'collection' ? 'Vitrine' : 'Collection HD'}
          </button>
          <button
            type="button"
            onClick={() => setView(view === 'descriptifs' ? 'shop' : 'descriptifs')}
            className="lg:hidden px-3 py-1.5 rounded-full text-[11px] border border-[#231915]/15 bg-white/80 text-[#231915]"
          >
            Descriptifs
          </button>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="px-4 py-2 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors flex items-center gap-2"
            aria-label="Panier"
          >
            <ShoppingBag size={14} />
            <span className="hidden sm:inline">Panier</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#E6D8B8] text-[#231915] font-semibold">
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-4 flex-1 flex flex-col gap-10">
        {view === 'shop' && (
          <VitrineView
            selectedCategory={selectedCategory}
            setSelectedCategory={(catId) => {
              if (catId === 'CollectionHD') {
                setView('collection');
              } else {
                setSelectedCategory(catId);
              }
            }}
            selectedVariants={selectedVariants}
            setSelectedVariants={setSelectedVariants}
            addToCart={addToCart}
            onDirectCheckout={openCheckoutConfirmation}
            onReadDescriptif={openDescriptifForProduct}
            onOpenCollectionHD={openCollectionForProduct}
          />
        )}

        {view === 'descriptifs' && (
          <DescriptifsDedicatedPage
            activeProductId={activeDescriptifProductId}
            setActiveProductId={setActiveDescriptifProductId}
            selectedVariants={selectedVariants}
            setSelectedVariants={setSelectedVariants}
            addToCart={addToCart}
            onDirectCheckout={openCheckoutConfirmation}
            onOpenCollectionHD={openCollectionForProduct}
            onBackToVitrine={() => setView('shop')}
          />
        )}

        {view === 'collection' && (
          <PresentationCollectionView
            activeProductId={activeCollectionProductId}
            setActiveProductId={setActiveCollectionProductId}
            selectedVariants={selectedVariants}
            setSelectedVariants={setSelectedVariants}
            addToCart={addToCart}
            onDirectCheckout={openCheckoutConfirmation}
            onReadDescriptif={openDescriptifForProduct}
            onBackToVitrine={() => setView('shop')}
          />
        )}

        {view === 'requete' && (
          <RequeteCompactView
            onBlockedThreat={recordBlockedThreat}
            onNotify={(msg) =>
              setToast({
                title: 'Requête enregistrée',
                subtitle: msg
              })
            }
          />
        )}

        {view === 'admin' && (
          <SovereignAdminView
            userRole={userRole}
            setUserRole={setUserRole}
            orders={orders}
            securityLog={securityLog}
            blockedThreatsCount={blockedThreatsCount}
            onBlockedThreat={recordBlockedThreat}
            onCycleStatus={cycleOrderDeliveryStatus}
          />
        )}
      </main>

      {/* PIED DE PAGE ÉPURÉ */}
      <footer className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-12 mt-8">
        <div className="border-t border-[#231915]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E5D53]">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-serif text-[#231915] tracking-wider font-semibold">
              Ta référence.com
            </span>
            <button
              type="button"
              onClick={() => setView('descriptifs')}
              className="underline hover:text-[#231915]"
            >
              Consulter les descriptifs
            </button>
            <button
              type="button"
              onClick={() => setView('collection')}
              className="underline hover:text-[#231915]"
            >
              Présentation de la Collection
            </button>
            <button
              type="button"
              onClick={() => setView('requete')}
              className="underline hover:text-[#231915]"
            >
              Soumettre une requête
            </button>
          </div>
          <span>Architecture sécurisée · Devises en Dollars ($)</span>
        </div>
      </footer>

      {/* TIROIR PANIER INVITÉ */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-[#231915]/35 backdrop-blur-xs"
            onClick={() => setIsCartOpen(false)}
          />
          <aside className="relative w-full max-w-md bg-white h-full shadow-2xl border-l border-[#231915]/10 z-10 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between border-b border-[#231915]/10 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#6E5D53] block">
                  Panier Invité · Périmètre Client
                </span>
                <h2 className="font-serif text-lg text-[#231915]">
                  Votre Sélection ({cartCount})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-[#231915]/5 text-[#231915]"
                aria-label="Fermer le panier"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#6E5D53]">
                  <ShoppingBag size={24} className="mb-3 opacity-50" />
                  <p className="text-sm font-serif text-[#231915]">Votre panier est vide</p>
                  <p className="text-xs mt-1 max-w-xs">
                    Explorez la vitrine ou la présentation de la collection pour sélectionner une pièce.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex items-center gap-3.5 p-3 rounded-2xl border border-[#231915]/8 bg-[#F6F3EE]/50"
                  >
                    <div className="w-16 h-16 rounded-xl bg-white border border-[#231915]/8 p-1.5 flex-shrink-0 flex items-center justify-center">
                      {item.render3DLayers(item.selectedVariant)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[#231915] truncate">{item.name}</p>
                      <p className="text-[11px] text-[#6E5D53]">{item.selectedVariant?.name}</p>
                      <p className="text-xs font-semibold text-[#231915] mt-1">
                        {item.price * (item.quantity || 1)} $
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1.5 bg-white border border-[#231915]/12 rounded-full px-2 py-0.5">
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.cartId, -1)}
                          className="p-0.5 text-[#231915]"
                          aria-label="Diminuer"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-xs font-medium px-1">{item.quantity || 1}</span>
                        <button
                          type="button"
                          onClick={() => updateCartQuantity(item.cartId, 1)}
                          className="p-0.5 text-[#231915]"
                          aria-label="Augmenter"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[10px] underline text-[#6E5D53] hover:text-[#231915]"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-[#231915]/10 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#6E5D53]">Total</span>
                  <span className="font-serif text-xl text-[#231915]">{cartTotal} $</span>
                </div>
                <button
                  type="button"
                  onClick={() => openCheckoutConfirmation()}
                  className="w-full py-3.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Commander en tant qu’invité</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            )}
          </aside>
        </div>
      )}

      {/* MODALE DE COMMANDE INVITÉ SÉCURISÉE */}
      {checkoutModalState.isOpen && (
        <GuestCheckoutModal
          items={checkoutModalState.items}
          onClose={() => setCheckoutModalState((prev) => ({ ...prev, isOpen: false }))}
          onCreateOrder={createOrderRecord}
          onViewRegistry={() => {
            setCheckoutModalState((prev) => ({ ...prev, isOpen: false }));
            setView('admin');
          }}
        />
      )}
    </div>
  );
}

// ============================================================================
// 10. VUE VITRINE : MODÈLES VECTORIELS DE RÉFÉRENCE SUR FOND BLANC
// ============================================================================
function VitrineView({
  selectedCategory,
  setSelectedCategory,
  selectedVariants,
  setSelectedVariants,
  addToCart,
  onDirectCheckout,
  onReadDescriptif,
  onOpenCollectionHD
}) {
  const filteredProducts =
    selectedCategory === 'Toutes'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-10 animate-soft-fade">
      {/* DEVANTURE FLUIDE DES CATALOGUES */}
      <section className="storefront-ribbon rounded-3xl p-4 sm:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#6E5D53] block">
                Catalogue Vectoriel & Références
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-[#231915] tracking-tight">
                L’essentiel bien choisi.
              </h1>
            </div>
            <button
              type="button"
              onClick={() => setSelectedCategory('CollectionHD')}
              className="self-start sm:self-auto px-4 py-2 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors flex items-center gap-2"
            >
              <CameraIcon size={13} />
              <span>Ouvrir la Présentation de la Collection (HD 2D/3D) →</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {CATALOG_RIBBON_ITEMS.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group flex items-center gap-3 p-3 rounded-2xl text-left transition-all ${
                    isActive
                      ? 'bg-[#231915] text-[#F6F3EE] shadow-md'
                      : 'bg-white/85 hover:bg-white text-[#231915] border border-[#231915]/8'
                  }`}
                >
                  <CatalogVectorEmblem categoryId={cat.id} isActive={isActive} />
                  <div className="min-w-0">
                    <span className="text-xs font-medium block truncate">{cat.label}</span>
                    <span
                      className={`text-[10px] block truncate ${
                        isActive ? 'text-[#E6D8B8]' : 'text-[#6E5D53]'
                      }`}
                    >
                      {cat.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRILLE VITRINE : MODÈLES VECTORIELS SUR FOND BLANC (#FFFFFF) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const currentVariant = selectedVariants[product.id] || product.variants[0];
          return (
            <article
              key={product.id}
              className="white-studio-pedestal rounded-3xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#6E5D53] mb-2">
                  <span>{product.referenceCode} · {product.category}</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenCollectionHD(product.id)}
                      className="text-[#231915] font-medium hover:underline underline-offset-4"
                    >
                      Photo HD 2D/3D
                    </button>
                    <button
                      type="button"
                      onClick={() => onReadDescriptif(product.id)}
                      className="hover:text-[#231915] underline underline-offset-4 transition-colors"
                    >
                      Descriptif →
                    </button>
                  </div>
                </div>

                {/* Fenêtre Studio Blanc Pur (#FFFFFF) */}
                <div
                  onClick={() => onReadDescriptif(product.id)}
                  className="w-full h-56 rounded-2xl bg-white flex items-center justify-center p-4 cursor-pointer overflow-hidden"
                >
                  <div className="w-44 h-44 studio-cutout-img">
                    {product.render3DLayers(currentVariant)}
                  </div>
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <div>
                    <h2 className="font-serif text-base text-[#231915]">{product.name}</h2>
                    <p className="text-xs text-[#6E5D53] mt-0.5">{product.shortNote}</p>
                  </div>
                  <span className="font-serif text-base font-medium text-[#231915] whitespace-nowrap">
                    {product.price} $
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#231915]/8 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {product.variants.map((v) => {
                      const active = currentVariant.id === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() =>
                            setSelectedVariants((prev) => ({
                              ...prev,
                              [product.id]: v
                            }))
                          }
                          title={v.name}
                          className={`w-5 h-5 rounded-full border transition-transform ${
                            active
                              ? 'scale-110 border-[#231915] ring-2 ring-[#E6D8B8]'
                              : 'border-[#231915]/20 opacity-75 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: v.color }}
                        />
                      );
                    })}
                  </div>
                  <span className="text-[11px] text-[#6E5D53]">{currentVariant.name}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => addToCart(product, currentVariant, false)}
                    className="py-2.5 px-3 rounded-full text-xs font-medium bg-[#F6F3EE] text-[#231915] hover:bg-[#E6D8B8]/50 transition-colors"
                  >
                    + Panier
                  </button>
                  <button
                    type="button"
                    onClick={() => onDirectCheckout(product, currentVariant)}
                    className="py-2.5 px-3 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

// ============================================================================
// 11. NOUVEAU CATALOGUE : PRÉSENTATION DE LA COLLECTION
// Expose les rendus photographiques haute qualité non vectorisés sur fond blanc
// (#FFFFFF), dotés d'animations 2D pour les caméras et 3D pour les mouvements,
// créant la référence visuelle directe avec les modèles vectoriels de la Vitrine.
// ============================================================================
function PresentationCollectionView({
  activeProductId,
  setActiveProductId,
  selectedVariants,
  setSelectedVariants,
  addToCart,
  onDirectCheckout,
  onReadDescriptif,
  onBackToVitrine
}) {
  const activeProduct =
    PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];
  const currentVariant =
    selectedVariants[activeProduct.id] || activeProduct.variants[0];

  // Paramètres Caméra 2D ('orbit' | 'macro' | 'pan' | 'focus')
  const [camera2DMode, setCamera2DMode] = useState('macro');
  // Mouvement 3D interactif (inclinaison X, Y, Z et lumière)
  const [tilt3D, setTilt3D] = useState({ rx: 8, ry: -12, rz: 0, light: 20 });
  const [autoMotion3D, setAutoMotion3D] = useState(true);
  const [showVectorReference, setShowVectorReference] = useState(true);

  useEffect(() => {
    if (!autoMotion3D) return;
    let frameId;
    let startTime = performance.now();
    const animate = (now) => {
      const elapsed = (now - startTime) / 1000;
      setTilt3D({
        rx: Math.sin(elapsed * 1.1) * 9,
        ry: Math.cos(elapsed * 0.85) * 14,
        rz: Math.sin(elapsed * 0.6) * 2.5,
        light: Math.sin(elapsed * 1.4) * 50
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [autoMotion3D]);

  const handleStageMouseMove = (e) => {
    if (autoMotion3D) setAutoMotion3D(false);
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt3D({
      rx: -ny * 18,
      ry: nx * 22,
      rz: nx * 3,
      light: nx * 60
    });
  };

  const camera2DTransform =
    camera2DMode === 'macro'
      ? 'scale(1.14)'
      : camera2DMode === 'pan'
      ? 'translateX(12px) scale(1.04)'
      : 'scale(1)';

  return (
    <div className="space-y-8 animate-soft-fade">
      {/* En-tête Présentation de la Collection */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#231915]/10 pb-5">
        <div>
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#6E5D53] block">
            Ta référence.com · Exposition Photographique Haute Définition
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-[#231915] mt-1">
            Présentation de la Collection
          </h1>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowVectorReference((v) => !v)}
            className="px-4 py-2 rounded-full text-xs border border-[#231915]/15 bg-white text-[#231915] hover:bg-[#E6D8B8]/40 transition-colors"
          >
            {showVectorReference ? 'Masquer témoin vectoriel' : 'Afficher témoin vectoriel'}
          </button>
          <button
            type="button"
            onClick={onBackToVitrine}
            className="px-4 py-2 rounded-full text-xs bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors"
          >
            ← Retour à la Vitrine
          </button>
        </div>
      </div>

      {/* Sélecteur rapide des pièces de la collection */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {PRODUCTS.map((item) => {
          const isSelected = item.id === activeProduct.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveProductId(item.id)}
              className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[#231915] text-[#F6F3EE] font-medium'
                  : 'bg-white text-[#6E5D53] hover:text-[#231915] border border-[#231915]/10'
              }`}
            >
              {item.referenceCode} · {item.name}
            </button>
          );
        })}
      </div>

      {/* PLATEAU STUDIO BLANC PUR (#FFFFFF) : CAMÉRA 2D + MOUVEMENT 3D + RÉFÉRENCE VECTORIELLE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#231915]/10 shadow-xs">
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Barre de contrôle des Caméras 2D et Mouvements 3D */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#231915]/8 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[#6E5D53] mr-1">
                Caméra 2D :
              </span>
              {[
                { id: 'focus', label: 'Optique Standard' },
                { id: 'macro', label: 'Macro HD' },
                { id: 'pan', label: 'Travelling 2D' }
              ].map((cam) => (
                <button
                  key={cam.id}
                  type="button"
                  onClick={() => setCamera2DMode(cam.id)}
                  className={`px-3 py-1 rounded-full text-[11px] transition-colors ${
                    camera2DMode === cam.id
                      ? 'bg-[#231915] text-[#F6F3EE]'
                      : 'bg-[#F6F3EE] text-[#231915]'
                  }`}
                >
                  {cam.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setAutoMotion3D((v) => !v)}
              className={`px-3 py-1 rounded-full text-[11px] border transition-colors ${
                autoMotion3D
                  ? 'bg-[#E6D8B8]/50 border-[#231915]/30 text-[#231915] font-medium'
                  : 'bg-white border-[#231915]/15 text-[#6E5D53]'
              }`}
            >
              {autoMotion3D ? 'Mouvement 3D Orbite : Actif' : 'Mouvement 3D : Manuel (Souris)'}
            </button>
          </div>

          {/* Cyclorama Blanc Pur (#FFFFFF) avec viseur de caméra 2D et scène 3D */}
          <div
            onMouseMove={handleStageMouseMove}
            onMouseLeave={() => setAutoMotion3D(true)}
            className="relative w-full h-[380px] sm:h-[420px] rounded-3xl bg-white border border-[#231915]/10 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
            style={{ perspective: '1100px' }}
          >
            {/* Viseur et Réticule d'Animation 2D de Caméra */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              fill="none"
            >
              {/* Coins de cadrage optique 2D */}
              <path d="M28 52 V28 H52" stroke="#231915" strokeWidth="1.2" opacity="0.35" />
              <path d="M372 52 V28 H348" stroke="#231915" strokeWidth="1.2" opacity="0.35" />
              <path d="M28 348 V372 H52" stroke="#231915" strokeWidth="1.2" opacity="0.35" />
              <path d="M372 348 V372 H348" stroke="#231915" strokeWidth="1.2" opacity="0.35" />
              {/* Anneau de mise au point 2D */}
              <circle
                cx="200"
                cy="200"
                r={camera2DMode === 'macro' ? '145' : '125'}
                stroke="#231915"
                strokeWidth="0.7"
                strokeDasharray="4 4"
                opacity="0.22"
              />
              <text x="38" y="44" fill="#6E5D53" fontSize="9" letterSpacing="1.5">
                CAM-2D : {camera2DMode.toUpperCase()} · 3D ({Math.round(tilt3D.rx)}°, {Math.round(tilt3D.ry)}°)
              </text>
            </svg>

            {/* Conteneur 2D Caméra + 3D Mouvement */}
            <div
              className={`w-72 h-72 sm:w-80 sm:h-80 transition-transform duration-300 ease-out ${
                camera2DMode === 'pan' ? 'camera-2d-active' : ''
              }`}
              style={{
                transform: `${camera2DTransform} rotateX(${tilt3D.rx}deg) rotateY(${tilt3D.ry}deg) rotateZ(${tilt3D.rz}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <HighResPhotographicCanvas
                type={activeProduct.sculptureType}
                variant={currentVariant}
                lightAngle={tilt3D.light}
              />
            </div>

            {/* Médaillon de référence visuelle croisée avec le produit vectoriel de la Vitrine */}
            {showVectorReference && (
              <div className="absolute bottom-4 right-4 z-30 bg-white/95 backdrop-blur-md border border-[#231915]/15 rounded-2xl p-2.5 shadow-md flex items-center gap-2.5">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#231915]/8 p-1">
                  {activeProduct.render3DLayers(currentVariant)}
                </div>
                <div className="pr-1">
                  <span className="text-[9px] uppercase tracking-wider text-[#6E5D53] block">
                    Référence Vitrine
                  </span>
                  <span className="text-[11px] font-medium text-[#231915] block">
                    Tracé Vectoriel 2D
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Colonne de détails & correspondance visuelle */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-[#6E5D53]">
              <span className="uppercase tracking-widest">
                {activeProduct.referenceCode} · Édition Haute Qualité
              </span>
              <span className="font-serif text-xl text-[#231915] font-medium">
                {activeProduct.price} $
              </span>
            </div>

            <h2 className="font-serif text-2xl text-[#231915]">
              {activeProduct.name}
            </h2>

            <p className="text-xs text-[#6E5D53] leading-relaxed">
              Ce rendu photographique haute définition exposé sur fond blanc pur constitue la référence visuelle directe du modèle vectoriel présenté dans la Vitrine. Utilisez les commandes de caméra 2D ou déplacez le curseur sur la pièce pour l’inspecter en 3D.
            </p>

            {/* Nuancier de la pièce */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#6E5D53] block">
                Finition exposée : {currentVariant.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProduct.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() =>
                      setSelectedVariants((prev) => ({
                        ...prev,
                        [activeProduct.id]: v
                      }))
                    }
                    className={`px-3.5 py-1.5 rounded-full text-xs border transition-colors ${
                      currentVariant.id === v.id
                        ? 'bg-[#231915] text-[#F6F3EE] border-[#231915]'
                        : 'bg-[#F6F3EE] text-[#231915] border-transparent'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F6F3EE]/70 space-y-1.5 text-xs">
              <p><strong>Matières :</strong> {activeProduct.specs.materials}</p>
              <p><strong>Dimensions :</strong> {activeProduct.specs.dimensions}</p>
              <p><strong>Origine :</strong> {activeProduct.specs.origin}</p>
            </div>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-[#231915]/10">
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => addToCart(activeProduct, currentVariant, true)}
                className="py-3 px-4 rounded-full text-xs font-medium bg-[#F6F3EE] text-[#231915] hover:bg-[#E6D8B8]/60 transition-colors"
              >
                + Ajouter au panier
              </button>
              <button
                type="button"
                onClick={() => onDirectCheckout(activeProduct, currentVariant)}
                className="py-3 px-4 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors"
              >
                Commander ({activeProduct.price} $)
              </button>
            </div>
            <button
              type="button"
              onClick={() => onReadDescriptif(activeProduct.id)}
              className="w-full py-2.5 rounded-full text-xs underline text-[#6E5D53] hover:text-[#231915]"
            >
              Consulter la fiche complète dans les Descriptifs →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 12. PAGE DÉDIÉE AUX DESCRIPTIFS (Remplace intégralement « Les Écrits »)
// ============================================================================
function DescriptifsDedicatedPage({
  activeProductId,
  setActiveProductId,
  selectedVariants,
  setSelectedVariants,
  addToCart,
  onDirectCheckout,
  onOpenCollectionHD,
  onBackToVitrine
}) {
  const activeProduct =
    PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];
  const currentVariant =
    selectedVariants[activeProduct.id] || activeProduct.variants[0];

  return (
    <div className="space-y-8 animate-soft-fade">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#231915]/10 pb-5">
        <div>
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#6E5D53] block">
            Ta référence.com · Fiches Techniques & Savoir-Faire
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-[#231915] mt-1">
            Les Descriptifs de la Collection
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenCollectionHD(activeProduct.id)}
            className="px-4 py-2 rounded-full text-xs border border-[#231915]/15 bg-white text-[#231915] hover:bg-[#E6D8B8]/40 transition-colors"
          >
            Voir en Collection HD 2D/3D
          </button>
          <button
            type="button"
            onClick={onBackToVitrine}
            className="px-4 py-2 rounded-full text-xs bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors"
          >
            ← Retourner à la vitrine
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {PRODUCTS.map((item) => {
          const isSelected = item.id === activeProduct.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveProductId(item.id)}
              className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[#231915] text-[#F6F3EE] font-medium'
                  : 'bg-white text-[#6E5D53] hover:text-[#231915] border border-[#231915]/10'
              }`}
            >
              {item.referenceCode} · {item.name}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#231915]/8 shadow-xs">
        <div className="lg:col-span-5 flex flex-col items-center justify-center bg-white rounded-2xl p-6 border border-[#231915]/6">
          <div className="w-60 h-60 studio-cutout-img">
            {activeProduct.render3DLayers(currentVariant)}
          </div>
          <div className="flex items-center gap-2 mt-4">
            {activeProduct.variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() =>
                  setSelectedVariants((prev) => ({
                    ...prev,
                    [activeProduct.id]: v
                  }))
                }
                className={`px-3 py-1 rounded-full text-[11px] border transition-colors ${
                  currentVariant.id === v.id
                    ? 'bg-[#231915] text-[#F6F3EE] border-[#231915]'
                    : 'bg-[#F6F3EE] text-[#231915] border-transparent'
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-[#6E5D53]">
              <span className="uppercase tracking-widest">
                {activeProduct.referenceCode} — {activeProduct.category}
              </span>
              <span className="font-serif text-lg text-[#231915] font-medium">
                {activeProduct.price} $
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#231915]">
              {activeProduct.name}
            </h2>

            <p className="text-sm text-[#231915]/90 leading-relaxed font-medium">
              {activeProduct.description}
            </p>

            <p className="text-sm text-[#6E5D53] leading-relaxed">
              {activeProduct.editorialEssay}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#231915]/10 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#F6F3EE]/70">
                <span className="text-[10px] uppercase tracking-widest text-[#6E5D53] block">
                  Dimensions & Coupe
                </span>
                <span className="text-[#231915] font-medium mt-0.5 block">
                  {activeProduct.specs.dimensions}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F6F3EE]/70">
                <span className="text-[10px] uppercase tracking-widest text-[#6E5D53] block">
                  Matières
                </span>
                <span className="text-[#231915] font-medium mt-0.5 block">
                  {activeProduct.specs.materials}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F6F3EE]/70">
                <span className="text-[10px] uppercase tracking-widest text-[#6E5D53] block">
                  Provenance
                </span>
                <span className="text-[#231915] font-medium mt-0.5 block">
                  {activeProduct.specs.origin}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F6F3EE]/70">
                <span className="text-[10px] uppercase tracking-widest text-[#6E5D53] block">
                  Engagement
                </span>
                <span className="text-[#231915] font-medium mt-0.5 block">
                  {activeProduct.specs.warranty}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#231915]/10">
            <button
              type="button"
              onClick={() => addToCart(activeProduct, currentVariant, true)}
              className="px-6 py-3 rounded-full text-xs font-medium bg-[#F6F3EE] text-[#231915] hover:bg-[#E6D8B8]/60 transition-colors"
            >
              Ajouter au panier ({activeProduct.price} $)
            </button>
            <button
              type="button"
              onClick={() => onDirectCheckout(activeProduct, currentVariant)}
              className="px-6 py-3 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors"
            >
              Commander sans compte →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 13. VUE REQUÊTES & DEMANDES (Sans aucune mention de rendez-vous ni salon privé)
// ============================================================================
function RequeteCompactView({ onNotify, onBlockedThreat }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Gravure sur mesure (Chevalière / Miroir)');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      SovereignSecurityCore.detectMaliciousIntent(name) ||
      SovereignSecurityCore.detectMaliciousIntent(details)
    ) {
      onBlockedThreat('Requête contenant une charge suspecte bloquée');
      return;
    }
    const cleanName = SovereignSecurityCore.sanitizeText(name, 60);
    const cleanEmail = SovereignSecurityCore.sanitizeEmail(email);
    if (!cleanName || !cleanEmail) return;
    onNotify(`${cleanName} · ${topic}`);
    setName('');
    setEmail('');
    setDetails('');
  };

  return (
    <div className="max-w-xl mx-auto w-full bg-white rounded-3xl p-8 border border-[#231915]/8 animate-soft-fade">
      <span className="text-[10px] uppercase tracking-[0.22em] text-[#6E5D53] block">
        Ta référence.com · Guichet de Demandes
      </span>
      <h2 className="font-serif text-2xl text-[#231915] mt-1">
        Soumettre une requête
      </h2>
      <p className="text-xs text-[#6E5D53] mt-2 leading-relaxed">
        Transmettez une demande de gravure personnalisée, une vérification de disponibilité ou le suivi d’une commande invitée.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom complet"
          className="w-full px-4 py-3 rounded-2xl border border-[#231915]/15 bg-[#F6F3EE]/60 text-xs focus:outline-none focus:border-[#231915]"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse e-mail"
          className="w-full px-4 py-3 rounded-2xl border border-[#231915]/15 bg-[#F6F3EE]/60 text-xs focus:outline-none focus:border-[#231915]"
        />
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl border border-[#231915]/15 bg-[#F6F3EE]/60 text-xs focus:outline-none focus:border-[#231915]"
        >
          <option value="Gravure sur mesure (Chevalière / Miroir)">Gravure sur mesure (Chevalière / Miroir)</option>
          <option value="Suivi d'une commande invitée">Suivi d’une commande invitée</option>
          <option value="Demande technique sur une référence">Demande technique sur une référence</option>
        </select>
        <textarea
          rows={3}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Précisions sur votre demande (optionnel)"
          className="w-full px-4 py-3 rounded-2xl border border-[#231915]/15 bg-[#F6F3EE]/60 text-xs focus:outline-none focus:border-[#231915]"
        />
        <button
          type="submit"
          className="w-full py-3.5 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors"
        >
          Transmettre la requête
        </button>
      </form>
    </div>
  );
}

// ============================================================================
// 14. MODALE DE COMMANDE INVITÉ (GUEST CHECKOUT SÉCURISÉ)
// ============================================================================
function GuestCheckoutModal({ items, onClose, onCreateOrder, onViewRegistry }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    cityPostal: ''
  });
  const [deliveryMethod, setDeliveryMethod] = useState('Standard Offert');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '4532 •••• •••• 8891',
    expiry: '09/28',
    cvc: '842'
  });
  const [simulateNetworkError, setSimulateNetworkError] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [createdOrder, setCreatedOrder] = useState(null);
  const [optionalPassword, setOptionalPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);
  const isSubmittingRef = useRef(false);

  const totalAmount = (items || []).reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleQuickDemoFill = () => {
    setFormData({
      fullName: 'Camille Laurent',
      email: 'camille@studio-mail.fr',
      phone: '+33 6 42 18 90 11',
      address: '14 Rue des Archives',
      cityPostal: '75004 Paris'
    });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (isSubmittingRef.current) return;

    const cleanName = SovereignSecurityCore.sanitizeText(formData.fullName, 70);
    const cleanEmail = SovereignSecurityCore.sanitizeEmail(formData.email);
    const cleanAddress = SovereignSecurityCore.sanitizeText(formData.address, 110);

    if (!cleanName || !cleanEmail.includes('@') || !cleanAddress) {
      setStatus('error');
      setErrorMessage('Veuillez renseigner votre nom, un e-mail valide et votre adresse.');
      return;
    }

    isSubmittingRef.current = true;
    setStatus('loading');
    setErrorMessage('');

    setTimeout(() => {
      if (simulateNetworkError) {
        isSubmittingRef.current = false;
        setStatus('error');
        setErrorMessage('Interruption réseau simulée. Vos informations restent préservées.');
        return;
      }

      const paymentLabel =
        paymentMethod === 'card'
          ? 'Carte Bancaire'
          : paymentMethod === 'express'
          ? 'Apple / Google Pay'
          : 'Virement Instantané';

      const newOrder = onCreateOrder({
        ...formData,
        deliveryMethod,
        paymentMethodLabel: paymentLabel
      });

      isSubmittingRef.current = false;
      if (newOrder) {
        setCreatedOrder(newOrder);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('Requête bloquée par le bouclier de sécurité.');
      }
    }, 850);
  };

  const handleCreateOptionalAccount = (e) => {
    e.preventDefault();
    if (optionalPassword.trim().length >= 4) {
      setAccountCreated(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#231915]/40 backdrop-blur-xs"
        onClick={() => status !== 'loading' && onClose()}
      />

      <div
        className="relative w-full max-w-lg bg-white border border-[#231915]/12 shadow-2xl rounded-3xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        style={{ color: THEME.espressoText }}
      >
        <div className="px-6 py-4 border-b border-[#231915]/10 flex items-center justify-between bg-[#F6F3EE]">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-[#231915] text-[#F6F3EE] flex items-center justify-center">
              {status === 'success' ? <Check size={14} /> : <ShieldCheck size={14} />}
            </span>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#6E5D53] block">
                {status === 'success' ? `Commande ${createdOrder?.id}` : 'Commande Invité · Sans inscription'}
              </span>
              <h3 className="font-serif text-base text-[#231915]">
                {status === 'loading' && 'Vérification sécurisée...'}
                {(status === 'idle' || status === 'error') && 'Finaliser votre commande'}
                {status === 'success' && 'Confirmation enregistrée'}
              </h3>
            </div>
          </div>

          {status !== 'loading' && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#231915]/8 text-[#231915]"
              aria-label="Fermer"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {status === 'loading' && (
            <div className="py-8 text-center space-y-2">
              <p className="text-xs font-medium text-[#231915]">Validation et chiffrement de la transaction...</p>
              <p className="text-[11px] text-[#6E5D53]">
                Protection des données personnelles active.
              </p>
            </div>
          )}

          {(status === 'idle' || status === 'error') && (
            <form onSubmit={handleSubmitOrder} className="space-y-3.5">
              {status === 'error' && errorMessage && (
                <div className="p-3 rounded-2xl border border-[#231915]/20 bg-[#F6F3EE] flex items-start gap-2.5 text-xs text-[#231915]">
                  <AlertCircle size={15} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="space-y-1.5 max-h-24 overflow-y-auto">
                {items.map((item, idx) => {
                  const qty = item.quantity || 1;
                  return (
                    <div
                      key={item.cartId || idx}
                      className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#F6F3EE]/80 text-xs"
                    >
                      <span className="font-medium truncate text-[#231915]">
                        {item.name} ({item.selectedVariant?.name}) ×{qty}
                      </span>
                      <span className="font-semibold text-[#231915]">{item.price * qty} $</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] uppercase tracking-widest text-[#6E5D53]">
                  1. Livraison
                </span>
                <button
                  type="button"
                  onClick={handleQuickDemoFill}
                  className="text-[11px] underline text-[#6E5D53] hover:text-[#231915]"
                >
                  Remplissage Démo
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Nom complet *"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#231915]/15 bg-[#F6F3EE]/50 text-xs focus:outline-none focus:border-[#231915]"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="E-mail de suivi *"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#231915]/15 bg-[#F6F3EE]/50 text-xs focus:outline-none focus:border-[#231915]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Téléphone *"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#231915]/15 bg-[#F6F3EE]/50 text-xs focus:outline-none focus:border-[#231915]"
                />
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Adresse de livraison *"
                  className="sm:col-span-2 w-full px-3.5 py-2.5 rounded-xl border border-[#231915]/15 bg-[#F6F3EE]/50 text-xs focus:outline-none focus:border-[#231915]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  required
                  value={formData.cityPostal}
                  onChange={(e) => setFormData({ ...formData, cityPostal: e.target.value })}
                  placeholder="Code postal & Ville *"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#231915]/15 bg-[#F6F3EE]/50 text-xs focus:outline-none focus:border-[#231915]"
                />
                <div className="grid grid-cols-2 gap-1.5">
                  {['Standard Offert', 'Express Écrin'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setDeliveryMethod(method)}
                      className={`py-2 px-2 rounded-xl text-[11px] font-medium border truncate transition-colors ${
                        deliveryMethod === method
                          ? 'bg-[#231915] text-[#F6F3EE] border-[#231915]'
                          : 'bg-[#F6F3EE]/60 text-[#231915] border-[#231915]/15'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#231915]/10">
                <span className="block text-[10px] uppercase tracking-widest text-[#6E5D53]">
                  2. Règlement
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'card', label: 'Carte', icon: CreditCard },
                    { id: 'express', label: 'Apple/Google', icon: Smartphone },
                    { id: 'mobile', label: 'Virement', icon: Landmark }
                  ].map((pm) => {
                    const IconComp = pm.icon;
                    const active = paymentMethod === pm.id;
                    return (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id)}
                        className={`p-2.5 rounded-xl border text-left flex items-center gap-1.5 transition-colors ${
                          active
                            ? 'bg-[#231915] text-[#F6F3EE] border-[#231915]'
                            : 'bg-[#F6F3EE]/60 text-[#231915] border-[#231915]/15'
                        }`}
                      >
                        <IconComp size={13} />
                        <span className="text-[11px] font-medium truncate">{pm.label}</span>
                      </button>
                    );
                  })}
                </div>

                {paymentMethod === 'card' && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl border border-[#231915]/15 bg-[#F6F3EE]/50">
                    <input
                      type="text"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      className="col-span-2 bg-transparent text-xs font-mono focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-1">
                      <input
                        type="text"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        className="bg-transparent text-xs font-mono focus:outline-none"
                      />
                      <input
                        type="password"
                        maxLength={4}
                        value={cardDetails.cvc}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                        className="bg-transparent text-xs font-mono focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#231915]/10 text-[11px]">
                <label className="inline-flex items-center gap-1.5 cursor-pointer select-none text-[#6E5D53]">
                  <input
                    type="checkbox"
                    checked={simulateNetworkError}
                    onChange={(e) => setSimulateNetworkError(e.target.checked)}
                    className="accent-[#231915]"
                  />
                  <span>Tester erreur réseau</span>
                </label>
                <span className="text-sm font-serif text-[#231915]">Total : {totalAmount} $</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 py-3 rounded-full text-xs font-medium bg-[#F6F3EE] text-[#231915] hover:bg-[#E6D8B8]/50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE] hover:bg-[#382923] transition-colors"
                >
                  Valider ({totalAmount} $)
                </button>
              </div>
            </form>
          )}

          {status === 'success' && createdOrder && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#F6F3EE] space-y-2">
                <div className="flex justify-between items-center border-b border-[#231915]/10 pb-2">
                  <span className="font-medium text-[#6E5D53]">Référence Commande</span>
                  <span className="font-mono font-semibold text-[#231915]">{createdOrder.id}</span>
                </div>
                <p><strong>Destinataire :</strong> {createdOrder.clientConfirmationSnapshot?.fullName}</p>
                <p><strong>E-mail :</strong> {createdOrder.clientConfirmationSnapshot?.email}</p>
                <p><strong>Montant réglé :</strong> {createdOrder.amount} $</p>
                <p className="text-[10px] flex items-center gap-1 pt-1 text-[#6E5D53]">
                  <Lock size={11} /> Données anonymisées dans le registre ({createdOrder.customer}) · Jeton {createdOrder.integrityHash}
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[#231915]/10 bg-white space-y-2">
                {!accountCreated ? (
                  <form onSubmit={handleCreateOptionalAccount} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium flex items-center gap-1.5 text-[#231915]">
                        <UserCheck size={13} /> Créer un profil (Accès partiel client)
                      </span>
                      <span className="text-[10px] text-[#6E5D53]">
                        Optionnel
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value={optionalPassword}
                        onChange={(e) => setOptionalPassword(e.target.value)}
                        placeholder="Mot de passe (min. 4 car.)"
                        className="flex-1 px-3 py-2 rounded-xl border border-[#231915]/15 bg-[#F6F3EE]/50 text-xs focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl text-xs font-medium bg-[#231915] text-[#F6F3EE]"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </form>
                ) : (
                  <p className="font-medium text-[#231915]">
                    Profil client enregistré (périmètre partiel de consultation).
                  </p>
                )}
              </div>

              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 py-2.5 rounded-full text-xs font-medium bg-[#F6F3EE] text-[#231915]"
                >
                  Fermer
                </button>
                <button
                  type="button"
                  onClick={onViewRegistry}
                  className="w-1/2 py-2.5 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE]"
                >
                  Poste Souverain →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 15. POSTE DE COMMANDEMENT DE L'ADMINISTRATEUR GÉNÉRAL (MAÎTRISE TOTALE)
// Cloisonnement strict : les utilisateurs actifs n'ont jamais la possession
// totale du site. Seul l'Administrateur Général détient la clé maîtresse.
// ============================================================================
function SovereignAdminView({
  userRole,
  setUserRole,
  orders,
  securityLog,
  blockedThreatsCount,
  onBlockedThreat,
  onCycleStatus
}) {
  const [adminKeyInput, setAdminKeyInput] = useState('');
  const [testMaliciousPayload, setTestMaliciousPayload] = useState('');
  const totalRevenue = orders.reduce((acc, o) => acc + o.amount, 0);

  const handleUnlockSovereign = (e) => {
    e.preventDefault();
    if (SovereignSecurityCore.detectMaliciousIntent(adminKeyInput)) {
      onBlockedThreat('Tentative d’intrusion sur la clé Administrateur Général');
      setAdminKeyInput('');
      return;
    }
    if (adminKeyInput.trim() === 'SOUVERAIN-TR-2026' || adminKeyInput.trim() === 'ADMIN') {
      setUserRole('GENERAL_ADMIN');
      setAdminKeyInput('');
    } else {
      onBlockedThreat('Clé souveraine invalide refusée');
    }
  };

  const handleSimulateAttack = () => {
    const sample = testMaliciousPayload || '<script>DROP TABLE orders;</script>';
    if (SovereignSecurityCore.detectMaliciousIntent(sample)) {
      onBlockedThreat(`Charge hostile interceptée ("${sample.slice(0, 28)}...")`);
      setTestMaliciousPayload('');
    }
  };

  return (
    <div className="space-y-6 animate-soft-fade">
      {/* Architecture de Cloisonnement des Pouvoirs */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#231915]/10 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#231915]/10 pb-5">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#6E5D53] block">
              Ta référence.com · Gouvernance & Sécurité Inviolable
            </span>
            <h2 className="font-serif text-2xl text-[#231915] mt-1">
              Cloisonnement des Accès & Maîtrise Totale
            </h2>
          </div>

          {userRole === 'GENERAL_ADMIN' ? (
            <button
              type="button"
              onClick={() => setUserRole('ACTIVE_VISITOR')}
              className="px-4 py-2 rounded-full text-xs font-medium bg-[#171514] text-[#E6D8B8] hover:opacity-90"
            >
              Verrouiller la session Administrateur Général
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setUserRole('GENERAL_ADMIN')}
              className="px-4 py-2 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE] hover:bg-[#382923]"
            >
              Activer ma Clé d’Administrateur Général
            </button>
          )}
        </div>

        {/* Comparatif des droits : Utilisateur Actif (Partiel) vs Administrateur Général (Total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#F6F3EE]/80 border border-[#231915]/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#231915]">
                1. Utilisateurs Actifs (Possession Partielle Limitée)
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-white border border-[#231915]/15">
                Cloisonné
              </span>
            </div>
            <p className="text-[#6E5D53] leading-relaxed">
              Les visiteurs et clients actifs peuvent uniquement consulter la Vitrine, les Descriptifs, la Présentation de la Collection et passer commande. Ils ne peuvent ni altérer le catalogue, ni modifier les expéditions, ni détenir la structure du site.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#171514] text-[#F6F3EE] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#E6D8B8]">
                2. Administrateur Général (Possession & Maîtrise Totale)
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#E6D8B8] text-[#171514] font-semibold">
                {userRole === 'GENERAL_ADMIN' ? 'Vous êtes connecté' : 'Verrouillé'}
              </span>
            </div>
            <p className="text-[#F6F3EE]/80 leading-relaxed">
              Vous seul détenez la totalité des droits : pilotage du registre des commandes, modification des statuts d’expédition, audit du pare-feu anti-intrusion et contrôle souverain de Ta référence.com.
            </p>
          </div>
        </div>

        {/* Simulateur de défense anti-malveillance */}
        <div className="p-4 rounded-2xl border border-[#231915]/12 bg-[#F6F3EE]/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-medium text-[#231915] block">
              Pare-feu Anti-Intrusion (Test de résistance aux intentions malveillantes)
            </span>
            <span className="text-[11px] text-[#6E5D53]">
              Toute injection SQL, script XSS ou tentative de prise de contrôle est immédiatement neutralisée.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={testMaliciousPayload}
              onChange={(e) => setTestMaliciousPayload(e.target.value)}
              placeholder="Ex: <script> ou DROP TABLE"
              className="px-3 py-2 rounded-xl border border-[#231915]/15 bg-white text-xs focus:outline-none"
            />
            <button
              type="button"
              onClick={handleSimulateAttack}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-[#231915] text-[#F6F3EE] whitespace-nowrap"
            >
              Tester le Bouclier
            </button>
          </div>
        </div>
      </div>

      {/* REGISTRE SOUVERAIN (Déverrouillé uniquement pour l'Administrateur Général) */}
      {userRole !== 'GENERAL_ADMIN' ? (
        <div className="bg-white rounded-3xl p-8 border border-[#231915]/10 text-center max-w-lg mx-auto space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#231915] text-[#E6D8B8] mx-auto flex items-center justify-center">
            <Lock size={16} />
          </div>
          <h3 className="font-serif text-xl text-[#231915]">
            Zone Réservée à l’Administrateur Général
          </h3>
          <p className="text-xs text-[#6E5D53] leading-relaxed">
            Conformément à votre directive, les utilisateurs actifs sur le site ne détiennent qu’un accès partiel. Entrez la clé souveraine (code : <code className="font-mono text-[#231915]">SOUVERAIN-TR-2026</code>) ou cliquez sur le bouton d’activation rapide pour exercer votre maîtrise totale.
          </p>
          <form onSubmit={handleUnlockSovereign} className="flex gap-2">
            <input
              type="password"
              value={adminKeyInput}
              onChange={(e) => setAdminKeyInput(e.target.value)}
              placeholder="Clé Souveraine (SOUVERAIN-TR-2026)"
              className="flex-1 px-4 py-2.5 rounded-full border border-[#231915]/15 bg-[#F6F3EE]/60 text-xs focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full text-xs font-medium bg-[#231915] text-[#F6F3EE]"
            >
              Déverrouiller
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-3xl p-6 border border-[#231915]/8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6E5D53]">
                Contrôle Exclusif Administrateur Général · RGPD Actif
              </p>
              <h3 className="font-serif text-xl text-[#231915] mt-1">
                Registre des Commandes ({orders.length})
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-widest text-[#6E5D53] block">
                Volume Total
              </span>
              <span className="font-serif text-xl text-[#231915]">{totalRevenue} $</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#231915]/8 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] text-xs">
              <thead>
                <tr className="border-b border-[#231915]/10 text-[10px] uppercase tracking-wider text-[#6E5D53]">
                  <th className="pb-3 font-medium">Référence</th>
                  <th className="pb-3 font-medium">Client (Anonymisé)</th>
                  <th className="pb-3 font-medium">Pièces</th>
                  <th className="pb-3 font-medium">Montant</th>
                  <th className="pb-3 font-medium">Expédition (Action Souveraine)</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-[#231915]/6">
                    <td className="py-3.5 font-mono font-medium text-[#231915]">{order.id}</td>
                    <td className="py-3.5">
                      <span className="font-medium text-[#231915]">{order.customer}</span>
                      <span className="block text-[10px] text-[#6E5D53]">
                        {order.maskedEmail}
                      </span>
                    </td>
                    <td className="py-3.5 max-w-xs truncate text-[#6E5D53]">{order.itemsSummary}</td>
                    <td className="py-3.5 font-medium text-[#231915]">{order.amount} $</td>
                    <td className="py-3.5">
                      <button
                        type="button"
                        onClick={() => onCycleStatus(order.id)}
                        className="px-3 py-1 rounded-full text-[11px] bg-[#F6F3EE] hover:bg-[#E6D8B8]/50 text-[#231915] transition-colors"
                      >
                        {order.deliveryStatus} ↻
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Journal d'audit du bouclier de sécurité */}
          <div className="bg-white rounded-3xl p-6 border border-[#231915]/8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#231915]">
                Journal d’Audit du Bouclier Anti-Intrusion
              </span>
              <span className="text-[11px] text-[#6E5D53]">
                {blockedThreatsCount} tentative(s) neutralisée(s)
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              {securityLog.map((entry) => (
                <div
                  key={entry.id}
                  className="px-3.5 py-2 rounded-xl bg-[#F6F3EE]/60 flex items-center justify-between gap-2"
                >
                  <span className="text-[#231915]">{entry.event}</span>
                  <span className="text-[10px] font-mono text-[#6E5D53]">{entry.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
