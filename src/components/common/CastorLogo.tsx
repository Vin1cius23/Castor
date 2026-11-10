import React from 'react';

interface CastorLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showUnitBadge?: boolean;
}

/**
 * Displays the official Castor logo preserved from the institutional reference,
 * paired with an editorial lockup identifying the Piracicaba Exclusive Store.
 */
export const CastorLogo: React.FC<CastorLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showUnitBadge = true,
}) => {
  const isLightText = variant === 'light';

  const emblemSizes = {
    sm: 'h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-14 w-auto',
  };

  return (
    <div className="inline-flex items-center gap-3.5 group select-none">
      {/* Official Castor Emblem */}
      <div className="relative overflow-hidden border border-[#B49A70]/35 shadow-xs transition-transform duration-500 group-hover:scale-[1.02]">
        <img
          src="/images/logo-castor-oficial.png"
          alt="Logo Oficial Colchões Castor"
          className={`${emblemSizes[size]} object-contain block`}
        />
      </div>

      {/* Editorial Identification of the Piracicaba Exclusive Unit */}
      {showUnitBadge && (
        <div className="flex flex-col justify-center border-l border-[#B49A70]/45 pl-3.5">
          <span
            className={`text-[10px] sm:text-[11px] uppercase tracking-[0.26em] font-medium leading-tight transition-colors duration-300 ${
              isLightText ? 'text-[#E8E0D4]' : 'text-[#858078]'
            }`}
          >
            Loja Exclusiva
          </span>
          <span
            className={`font-editorial text-base sm:text-lg tracking-[0.06em] font-medium leading-tight transition-colors duration-300 ${
              isLightText ? 'text-[#FFFFFF]' : 'text-[#29231F]'
            }`}
          >
            Piracicaba
          </span>
        </div>
      )}
    </div>
  );
};

