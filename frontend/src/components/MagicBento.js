import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { LinkIcon, ChartBarIcon, CommandLineIcon, MagnifyingGlassIcon, EyeIcon, PencilSquareIcon, PhotoIcon, AcademicCapIcon, PuzzlePieceIcon, ChartPieIcon } from '@heroicons/react/24/outline';
import GlassSurface from './GlassSurface'; // Assuming GlassSurface is in the same directory

const MagicBento = () => {
  const { t } = useTranslation('home');
  const containerRef = useRef(null);

  const cardData = {
    forge: {
      icon: LinkIcon,
      label: t('magic_bento.forge.label', 'FORGE'),
      title: t('magic_bento.forge.title', 'AI Product Imaging & Content'),
      description: t('magic_bento.forge.description', 'Connect marketplaces and upload products. Let AI generate stunning visuals and compelling descriptions.'),
    },
    amplify: {
      icon: ChartBarIcon,
      label: t('magic_bento.amplify.label', 'AMPLIFY'),
      title: t('magic_bento.amplify.title', 'Smart Marketing & Pricing'),
      description: t('magic_bento.amplify.description', 'Unleash AI to create hypnotic campaigns and execute unbeatable pricing strategies.'),
    },
    dominate: {
      icon: CommandLineIcon,
      label: t('magic_bento.dominate.label', 'DOMINATE'),
      title: t('magic_bento.dominate.title', 'Unified Command Center'),
      description: t('magic_bento.dominate.description', 'Rule your empire from a single panel. Dominate the market with real-time data.'),
    },
    seo_analysis: {
      icon: MagnifyingGlassIcon,
      label: t('magic_bento.seo_analysis.label', 'ANALYSIS'),
      title: t('magic_bento.seo_analysis.title', 'SEO & Trend Analysis'),
      description: t('magic_bento.seo_analysis.description', 'Before launch, AI analyzes market trends, SEO keywords, and competitor strategies to position your product for maximum impact.'),
    },
    competitor_analysis: {
      icon: EyeIcon,
      label: t('magic_bento.competitor_analysis.label', 'ANALYSIS'),
      title: t('magic_bento.competitor_analysis.title', 'Competitor Intelligence'),
      description: t('magic_bento.competitor_analysis.description', 'Gain an unfair advantage with deep insights into competitor pricing, marketing, and product strategies.'),
    },
    ai_descriptions: {
      icon: PencilSquareIcon,
      label: t('magic_bento.ai_descriptions.label', 'CONTENT'),
      title: t('magic_bento.ai_descriptions.title', 'AI-Optimized Descriptions'),
      description: t('magic_bento.ai_descriptions.description', 'Generate compelling, keyword-rich product descriptions tailored to your brand voice and target audience.'),
    },
    ai_visuals: {
      icon: PhotoIcon,
      label: t('magic_bento.ai_visuals.label', 'VISUALS'),
      title: t('magic_bento.ai_visuals.title', 'AI-Generated Product Visuals'),
      description: t('magic_bento.ai_visuals.description', 'From a simple idea or sketch, Ekobol AI creates stunning, photorealistic product images and visualizations.'),
    },
    ai_learning: {
      icon: AcademicCapIcon,
      label: t('magic_bento.ai_learning.label', 'OPTIMIZATION'),
      title: t('magic_bento.ai_learning.title', 'Continuous AI Learning'),
      description: t('magic_bento.ai_learning.description', 'Our AI agents constantly monitor market data, learn from performance, and autonomously refine strategies for ongoing growth.'),
    },
    connectivity: {
      icon: PuzzlePieceIcon,
      label: t('magic_bento.connectivity.label', 'CORE'),
      title: t('magic_bento.connectivity.title', 'Marketplace Integration'),
      description: t('magic_bento.connectivity.description', 'Seamlessly connect and manage all your sales channels from one central hub.'),
    },
    insights: {
      icon: ChartPieIcon,
      label: t('magic_bento.insights.label', 'CORE'),
      title: t('magic_bento.insights.title', 'Real-time Analytics'),
      description: t('magic_bento.insights.description', 'Gain deep insights into your sales, customers, and market behavior to stay ahead.'),
    },
  };

  useEffect(() => {
    const cards = Array.from(containerRef.current.children);

    const handleHover = (card, enter) => {
      gsap.to(card, {
        y: enter ? -8 : 0,
        scale: enter ? 1.03 : 1,
        boxShadow: enter ? '0 25px 50px -12px rgba(var(--accent-primary-rgb), 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => handleHover(card, true));
      card.addEventListener('mouseleave', () => handleHover(card, false));
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => handleHover(card, true));
        card.removeEventListener('mouseleave', () => handleHover(card, false));
      });
    };
  }, []);

  const Card = ({ id, data }) => (
    <div id={id} className="bento-card">
      <GlassSurface className="w-full h-full p-6 flex flex-col items-start">
        {data.icon && React.createElement(data.icon, { className: "h-8 w-8 text-accent-primary mb-4" })}
        <span className="text-sm font-bold text-accent-primary uppercase tracking-widest">{data.label}</span>
        <h3 className="text-xl font-bold my-2 text-text-primary">{data.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{data.description}</p>
      </GlassSurface>
    </div>
  );

  return (
    <div ref={containerRef} className="magic-bento-grid relative w-full max-w-5xl mx-auto">
      <Card data={cardData.seo_analysis} />
      <Card data={cardData.competitor_analysis} />
      <Card data={cardData.forge} />
      <Card data={cardData.ai_visuals} />
      <Card data={cardData.ai_descriptions} />
      <Card data={cardData.amplify} />
      <Card data={cardData.connectivity} />
      <Card data={cardData.insights} />
      <Card data={cardData.dominate} />
      <Card data={cardData.ai_learning} />
    </div>
  );
};

export default MagicBento;
