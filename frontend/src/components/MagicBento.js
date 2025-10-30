import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import GlassSurface from './GlassSurface'; // Assuming GlassSurface is in the same directory

const MagicBento = () => {
  const { t } = useTranslation('home');
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  const cardData = {
    forge: {
      label: t('genesis_step1_title', 'FORGE'),
      title: t('magic_bento.forge.title', 'AI Product Imaging & Content'),
      description: t('magic_bento.forge.description', 'Connect marketplaces and upload products. Let AI generate stunning visuals and compelling descriptions.'),
    },
    amplify: {
      label: t('genesis_step2_title', 'AMPLIFY'),
      title: t('magic_bento.amplify.title', 'Smart Marketing & Pricing'),
      description: t('magic_bento.amplify.description', 'Unleash AI to create hypnotic campaigns and execute unbeatable pricing strategies.'),
    },
    dominate: {
      label: t('genesis_step3_title', 'DOMINATE'),
      title: t('magic_bento.dominate.title', 'Unified Command Center'),
      description: t('magic_bento.dominate.description', 'Rule your empire from a single panel. Dominate the market with real-time data.'),
    },
    connectivity: {
      label: t('magic_bento.connectivity.label', 'CORE'),
      title: t('magic_bento.connectivity.title', 'Marketplace Integration'),
      description: t('magic_bento.connectivity.description', 'Seamlessly connect and manage all your sales channels from one central hub.'),
    },
    insights: {
      label: t('magic_bento.insights.label', 'CORE'),
      title: t('magic_bento.insights.title', 'Real-time Analytics'),
      description: t('magic_bento.insights.description', 'Gain deep insights into your sales, customers, and market behavior to stay ahead.'),
    },
  };

  useEffect(() => {
    const cards = Array.from(containerRef.current.children);
    const lines = linesRef.current;

    const animateLines = () => {
      lines.forEach(line => {
        gsap.fromTo(
          line.querySelector('.line-glow'),
          { attr: { 'stroke-dashoffset': 200 } },
          {
            attr: { 'stroke-dashoffset': 0 },
            duration: 2,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
          }
        );
      });
    };

    const handleHover = (card, line, enter) => {
      gsap.to(card, {
        y: enter ? -8 : 0,
        scale: enter ? 1.03 : 1,
        boxShadow: enter ? '0 25px 50px -12px rgba(var(--accent-primary-rgb), 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out',
      });
      if (line) {
        gsap.to(line, {
          '--line-opacity': enter ? 1 : 0.3,
          '--line-stroke': enter ? 'url(#glow-gradient)' : 'rgba(var(--accent-primary-rgb), 0.3)',
          duration: 0.3,
        });
      }
    };

    cards.forEach((card, index) => {
      const line = lines[index];
      card.addEventListener('mouseenter', () => handleHover(card, line, true));
      card.addEventListener('mouseleave', () => handleHover(card, line, false));
    });

    animateLines();

    return () => {
      cards.forEach((card, index) => {
        const line = lines[index];
        card.removeEventListener('mouseenter', () => handleHover(card, line, true));
        card.removeEventListener('mouseleave', () => handleHover(card, line, false));
      });
    };
  }, []);

  const Card = ({ id, data }) => (
    <div id={id} className="bento-card">
      <GlassSurface className="w-full h-full p-6 flex flex-col">
        <span className="text-sm font-bold text-accent-primary uppercase tracking-widest">{data.label}</span>
        <h3 className="text-xl font-bold my-2 text-text-primary">{data.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{data.description}</p>
      </GlassSurface>
    </div>
  );

  return (
    <div ref={containerRef} className="magic-bento-grid relative w-full max-w-5xl mx-auto">
      <Card id="card-forge" data={cardData.forge} />
      <Card id="card-amplify" data={cardData.amplify} />
      <Card id="card-dominate" data={cardData.dominate} />
      <Card id="card-connectivity" data={cardData.connectivity} />
      <Card id="card-insights" data={cardData.insights} />

      <svg className="bento-connections" width="100%" height="100%">
        <defs>
          <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(var(--accent-primary-rgb), 0)" />
            <stop offset="50%" stopColor="rgba(var(--accent-primary-rgb), 1)" />
            <stop offset="100%" stopColor="rgba(var(--accent-primary-rgb), 0)" />
          </linearGradient>
        </defs>
        {/* Lines will be positioned with CSS, but defined here for GSAP */}
        <g ref={el => linesRef.current[0] = el} className="connection-line line-forge-amplify">
          <path className="line-bg" d="M0 0, 100 0" />
          <path className="line-glow" d="M0 0, 100 0" stroke="url(#glow-gradient)" strokeWidth="2" strokeDasharray="100 100" />
        </g>
        <g ref={el => linesRef.current[1] = el} className="connection-line line-amplify-dominate">
          <path className="line-bg" d="M0 0, 100 0" />
          <path className="line-glow" d="M0 0, 100 0" stroke="url(#glow-gradient)" strokeWidth="2" strokeDasharray="100 100" />
        </g>
        <g ref={el => linesRef.current[2] = el} className="connection-line line-core-forge">
          <path className="line-bg" d="M0 100, 0 0" />
          <path className="line-glow" d="M0 100, 0 0" stroke="url(#glow-gradient)" strokeWidth="2" strokeDasharray="50 50" />
        </g>
         <g ref={el => linesRef.current[3] = el} className="connection-line line-core-dominate">
          <path className="line-bg" d="M0 100, 0 0" />
          <path className="line-glow" d="M0 100, 0 0" stroke="url(#glow-gradient)" strokeWidth="2" strokeDasharray="50 50" />
        </g>
      </svg>
    </div>
  );
};

export default MagicBento;
