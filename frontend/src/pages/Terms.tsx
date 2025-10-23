import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <article className='max-w-4xl mx-auto prose lg:prose-xl'>
        <h1>{t('termsTitle')}</h1>
        <p className='text-sm text-[var(--text-secondary-color)]'>
          {t('termsLastUpdated')}
        </p>
        <p>{t('termsIntro')}</p>

        <h2>{t('termsDefinitionsTitle')}</h2>
        <ul>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsDefinitionService') }}
          ></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsDefinitionUser') }}
          ></li>
          <li
            dangerouslySetInnerHTML={{
              __html: t('termsDefinitionUserContent'),
            }}
          ></li>
          <li
            dangerouslySetInnerHTML={{
              __html: t('termsDefinitionMarketplace'),
            }}
          ></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsDefinitionNetProfit') }}
          ></li>
        </ul>

        <h2>{t('termsAccountTitle')}</h2>
        <p>{t('termsAccountDesc')}</p>

        <h2>{t('termsPlansTitle')}</h2>
        <p>{t('termsPlansDesc')}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsPlansRevenueSharing') }}
          ></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsPlansSubscription') }}
          ></li>
          <li
            dangerouslySetInnerHTML={{
              __html: t('termsPlansBuildAndTransfer'),
            }}
          ></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsPlansPayments') }}
          ></li>
        </ul>

        <h2>{t('termsIpTitle')}</h2>
        <ul>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsIpUserOwnership') }}
          ></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsIpCompanyLicense') }}
          ></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('termsIpCompanyOwnership') }}
          ></li>
        </ul>

        <h2>{t('termsAcceptableUseTitle')}</h2>
        <p>{t('termsAcceptableUseDesc')}</p>
        <ul>
          <li>{t('termsAcceptableUseItem1')}</li>
          <li>{t('termsAcceptableUseItem2')}</li>
          <li>{t('termsAcceptableUseItem3')}</li>
          <li>{t('termsAcceptableUseItem4')}</li>
        </ul>

        <h2>{t('termsWarrantyDisclaimerTitle')}</h2>
        <p>{t('termsWarrantyDisclaimerDesc')}</p>

        <h2>{t('termsLiabilityLimitationTitle')}</h2>
        <p>{t('termsLiabilityLimitationDesc')}</p>

        <h2>{t('termsIndemnificationTitle')}</h2>
        <p>{t('termsIndemnificationDesc')}</p>

        <h2>{t('termsGoverningLawTitle')}</h2>
        <p>{t('termsGoverningLawDesc')}</p>

        <h2>{t('termsOtherProvisionsTitle')}</h2>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t('termsOtherProvisionsAgreement'),
            }}
          ></li>
          <li
            dangerouslySetInnerHTML={{
              __html: t('termsOtherProvisionsSeverability'),
            }}
          ></li>
          <li
            dangerouslySetInnerHTML={{
              __html: t('termsOtherProvisionsContact'),
            }}
          ></li>
        </ul>
      </article>
    </main>
  );
};

export default Terms;
