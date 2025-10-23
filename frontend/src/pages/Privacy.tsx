import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <main className='flex-1 px-4 sm:px-10 lg:px-20 py-16 lg:py-24'>
      <article className='max-w-4xl mx-auto prose lg:prose-xl'>
        <h1>{t('privacyTitle')}</h1>
        <p className='text-sm text-[var(--text-secondary-color)]'>
          {t('privacyLastUpdated')}
        </p>
        <p>{t('privacyIntro')}</p>

        <h2>{t('privacyInformationWeCollectTitle')}</h2>
        <p>{t('privacyInformationWeCollectDesc')}</p>
        <h3>{t('privacyTypesOfDataCollectedTitle')}</h3>
        <ul>
          <li
            dangerouslySetInnerHTML={{ __html: t('privacyPersonalData') }}
          ></li>
          <li dangerouslySetInnerHTML={{ __html: t('privacyUsageData') }}></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('privacyMarketplaceData') }}
          ></li>
          <li
            dangerouslySetInnerHTML={{
              __html: t('privacyTrackingCookiesData'),
            }}
          ></li>
        </ul>

        <h2>{t('privacyUseOfDataTitle')}</h2>
        <p>{t('privacyUseOfDataDesc')}</p>
        <ul>
          <li>{t('privacyUseOfDataItem1')}</li>
          <li>{t('privacyUseOfDataItem2')}</li>
          <li>{t('privacyUseOfDataItem3')}</li>
          <li>{t('privacyUseOfDataItem4')}</li>
          <li>{t('privacyUseOfDataItem5')}</li>
          <li>{t('privacyUseOfDataItem6')}</li>
          <li>{t('privacyUseOfDataItem7')}</li>
        </ul>

        <h2>{t('privacySharingAndDisclosureTitle')}</h2>
        <p>{t('privacySharingAndDisclosureDesc')}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{ __html: t('privacyServiceProviders') }}
          ></li>
          <li
            dangerouslySetInnerHTML={{ __html: t('privacyLegalObligations') }}
          ></li>
        </ul>

        <h2>{t('privacyDataSecurityTitle')}</h2>
        <p>{t('privacyDataSecurityDesc')}</p>

        <h2>{t('privacyDataRightsTitle')}</h2>
        <p>{t('privacyDataRightsDesc')}</p>

        <h2>{t('privacyPolicyChangesTitle')}</h2>
        <p>{t('privacyPolicyChangesDesc')}</p>

        <h2>{t('privacyContactUsTitle')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('privacyContactUsDesc') }}></p>
      </article>
    </main>
  );
};

export default Privacy;
